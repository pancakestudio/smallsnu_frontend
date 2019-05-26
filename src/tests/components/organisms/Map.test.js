import React from 'react';
import createSagaMiddleware from 'redux-saga'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { Map } from '../../../components/organisms/Map'
import ConnectedMap from '../../../containers/Map'
import { getBldgNo } from '../../../utils/Functions'
import * as actions from '../../../store/actions'
import reducers from '../../../store/reducers'

const seminars = [
   {
     "id": 11,
     "building": {
         "id": 1,
         "code": "302",
         "spot": {
             "id": 1,
             "latitude": "37.448568",
             "longitude": "126.952438"
         }
     },
     "title": "[Seminar] SCAI AI Lunch Talk #1 - Deep Learning @ Naver/Line",
     "talker": "김성훈리더NAVER Clova AI ",
     "where": "302동 105호",
     "time": "2019년 3월 21일 목요일 PM 12:30 - 2019년 3월 21일 목요일 PM 1:30",
     "link": "https://cse.snu.ac.kr/node/36870"
  },
  {
    "id": 12,
    "building": {
        "id": 1,
        "code": "302",
        "spot": {
            "id": 1,
            "latitude": "37.448568",
            "longitude": "126.952438"
        }
    },
    "title": "[Seminar] Scalable and Automatic Vulnerability Discovery Beyond Random Testing",
    "talker": "윤인수 (Insu Yun)Ph.D. student Georgia Institute of Technology",
    "where": "302-409",
    "time": "2019년 3월 11일 월요일 AM 10:30 - 2019년 3월 11일 월요일 PM 12:00",
    "link": "https://cse.snu.ac.kr/node/35622"
  },
  {
    "id": 5,
    "building": {
        "id": 2,
        "code": "301",
        "spot": {
            "id": 2,
            "latitude": "37.449890",
            "longitude": "126.952435"
        }
    },
    "title": "[Seminar] Enabling Scalable Learning on Massive Datasets",
    "talker": "Praveen R. RaoComputer Science & Electrical Engineering School of Computing and Engineering, University of Missouri-Kansas City",
    "where": "301동 306호",
    "time": "2019년 4월 12일 금요일 AM 11:00 - 2019년 4월 12일 금요일 PM 12:00",
    "link": "https://cse.snu.ac.kr/node/37069"
  },
]

const restaurants = [{
  id: 1,
  kr_name: '식당',
  building: {
    spot: {
      latitude: 37.469,
      longitude: 126.962
    }
  }
}]

describe('Map', ()=>{
  global.window = { location: { pathname: null } };
  let component = null;
  const mockZoom = jest.fn()
  const mockBackgroundClick = jest.fn()

  it('renders correctly', ()=>{
    component = shallow(
      <Map
        currentPos={{lat: 37.459, lng: 126.952}}
        zoom={17}
        searchedBldg={"301"}
        showSearchMarker={false}
        semis={[]}
        resData={[]}
        showResMarkers={false}
        showSemiMarkers={false}
        onZoom={mockZoom}
        onBackgroundClick={mockBackgroundClick}
      />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a leafletmap', ()=>{
    expect(component.find('.leafletMap').exists()).toBe(true)
  })

  it('has a correct position and zoom level', ()=>{
    expect(component.find('.leafletMap').prop('center')).toEqual({lat:37.459, lng:126.952})
    expect(component.find('.leafletMap').prop('zoom')).toBe(17)
  })

  it('sets searchmarker correctly', ()=>{
    expect(component.find('.searchMarker').exists()).toBe(false)
    component.setProps({showSearchMarker: true})
    expect(component.find('.searchMarker').exists()).toBe(true)
  })

  it('sets resmarker correctly', () => {
    expect(component.find('.resMarker').exists()).toBe(false)
    component.setProps({showResMarkers: true})
    expect(component.find('.resMarker').exists()).toBe(false)
    component.setProps({resData: restaurants})
    expect(component.find('.resMarker').exists()).toBe(true)
  })

  it('sets seminar markers correctly', ()=>{
    expect(component.find('.semiMarker').exists()).toBe(false)
    component.setProps({showSemiMarkers: true})
    expect(component.find('.semiMarker').exists()).toBe(false)
    component.setProps({semis: seminars})
    expect(component.find('.semiMarker').exists()).toBe(true)
  })

  it('calls functions', ()=>{
    component.find('.leafletMap').simulate('click', {latlng: {lat:37.46445, lng:126.95626}})
    component.find('.leafletMap').simulate('click', {latlng: {lat:37.459, lng:126.952}})
    component.find('.leafletMap').simulate('zoomEnd', {target: {_zoom: 18}})
    component.find('.resMarker').simulate('click')
    expect(global.window.location.pathname).toEqual('/restaurant/1')
    component.find('.semiMarker').at(0).simulate('click')
    expect(global.window.location.pathname).toEqual('/seminarlist/302')
    component.find('.searchMarker').simulate('click')
    expect(global.window.location.pathname).toEqual('/building/301')
    expect(mockBackgroundClick.mock.calls.length).toBe(1)
    expect(mockZoom.mock.calls.length).toBe(1)
  })
})

describe('ConnectedMap',()=>{
  const initialState = {
    currentPos: {lat:37.459, lng:126.952},
    zoom: 17,
    showMarker: false,
    allRestaurants: restaurants,
    allseminars: seminars,
    showSemiMarkers: true,
    showResMarkers: true
  }
  let store, component

  it('renders correctly', ()=>{
    const mockStore = configureStore()
    store = mockStore(initialState)
    component = mount(<Provider store={store}><ConnectedMap/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a leafletmap', ()=>{
    expect(component.find('.leafletMap').exists()).toBe(true)
  })

  it('dispatches zoomChanged action', ()=>{
    const e = {target: {_zoom: 18}}
    component.find('Map').at(1).prop('onZoomEnd')(e)
    expect(store.getActions()[0]).toEqual(actions.zoomChanged(e.target._zoom))
  })

  it('dispatches hideMarkers action', ()=>{
    const e = {latlng: {lat:37.45707, lng: 126.95148}}
    component.find('Map').at(1).prop('onClick')(e)
    expect(store.getActions()[1]).toEqual(actions.hideMarkers())
  })
})
