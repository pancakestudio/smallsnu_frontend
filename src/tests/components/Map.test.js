import React from 'react';
import { Provider } from 'react-redux'
import { Map }  from '../../components/organisms/Map'
import ConnectedMap from '../../containers/Map'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { getBldgNo } from '../../utils/Functions'
import * as actions from '../../store/actions'

describe('Map', ()=>{
  let component = null;
  const mockMapClick = jest.fn()
  const mockZoom = jest.fn()
  const mockResClick = jest.fn()

  let resData = null;
  const handleResClick = (data) => {
    resData = data;
  }

  it('renders correctly', ()=>{

    component = shallow(
      <Map
        currentPos={{lat: 37.459, lng: 126.952}}
        zoom={17}
        showSearchMarker={false}
        showSideResMarker={false}
        onMapClick={mockMapClick}
        onZoom={mockZoom}
        onResClick={mockResClick}
        resData = {{
          kr_name: '식당',
          building: {
            spot: {
              latitude: 37.469,
              longitude: 126.962
            }
          }
        }}
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

  it('resData in sideResMarker is null', () => {
    expect(component.find('.sideResMarker').exists()).toBe(false)
    component.setProps({
      showSideResMarker: true,
      resData : null
    })
    expect(component.find('.sideResMarker').exists()).toBe(false)
  })

  it('sets resmarker correctly', () => {
    expect(component.find('.sideResMarker').exists()).toBe(false)
    component.setProps({
      showSideResMarker: true,
      resData: [{
        kr_name: '식당',
        building: {
          spot: {
            latitude: 37.469,
            longitude: 126.962
          }
        }
      }]
    })
    expect(component.find('.sideResMarker').exists()).toBe(true)
  })

  it('calls functions', ()=>{
    component.find('.leafletMap').simulate('click', {latlng: {lat:37.46445, lng:126.95626}})
    component.find('.leafletMap').simulate('click', {latlng: {lat:37.459, lng:126.952}})
    component.find('.leafletMap').simulate('zoomEnd', {target: {_zoom: 18}})
    component.find('.sideResMarker').simulate('click',
    { resData: [{
      kr_name: '식당',
      building: {
        spot: {
          latitude: 37.469,
          longitude: 126.962
        }
      }
    }]})
    expect(mockMapClick.mock.calls.length).toBe(1)
    expect(mockZoom.mock.calls.length).toBe(1)
    expect(mockResClick.mock.calls.length).toBe(1)
  })
})

describe('ConnectedMap',()=>{
  const initialState = {currentPos: {lat:37.459, lng:126.952}, zoom: 17, showMarker: false}
  const mockStore = configureStore()
  let store, component

  it('renders correctly', ()=>{
    store = mockStore(initialState)
    component = mount(<Provider store={store}><ConnectedMap/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a leafletmap', ()=>{
    expect(component.find('.leafletMap').exists()).toBe(true)
  })

  it('dispatches buildingClick action', ()=>{
    const e = {latlng: {lat:37.459, lng:126.952}}
    component.find('Map').at(1).prop('onClick')(e)
    expect(store.getActions()[0]).toEqual(actions.buildingClick(getBldgNo(e.latlng), e.latlng))
  })

  it('dispatches zoomChanged action', ()=>{
    const e = {target: {_zoom: 18}}
    component.find('Map').at(1).prop('onZoomEnd')(e)
    expect(store.getActions()[1]).toEqual(actions.zoomChanged(e.target._zoom))
  })
})
