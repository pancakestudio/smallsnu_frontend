import React from 'react';
import createSagaMiddleware from 'redux-saga'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { Map } from '../../components/organisms/Map'
import ConnectedMap from '../../containers/Map'
import { getBldgNo } from '../../utils/Functions'
import * as actions from '../../store/actions'
import rootSaga from '../../store/sagas'
import reducers from '../../store/reducers'
import * as api from '../../services/api'

describe('Map', ()=>{
  let component
  const mockMapClick = jest.fn()
  const mockZoom = jest.fn()

  it('renders correctly', ()=>{
    component = shallow(
      <Map 
        currentPos={{lat: 37.459, lng: 126.952}}
        zoom={17}
        showMarker={false}
        onMapClick={mockMapClick}
        onZoom={mockZoom}
      />)
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

  it('sets marker correctly', ()=>{
    expect(component.find('.marker').exists()).toBe(false)
    component.setProps({showMarker: true})
    expect(component.find('.marker').exists()).toBe(true)
  })

  it('calls functions', ()=>{
    component.find('.leafletMap').simulate('click', {latlng: {lat:37.46445, lng:126.95626}})
    component.find('.leafletMap').simulate('click', {latlng: {lat:37.459, lng:126.952}})
    component.find('.leafletMap').simulate('zoomEnd', {target: {_zoom: 18}})
    expect(mockMapClick.mock.calls.length).toBe(1)
    expect(mockZoom.mock.calls.length).toBe(1)
  })
})

describe('ConnectedMap',()=>{
  const initialState = {currentPos: {lat:37.459, lng:126.952}, zoom: 17, showMarker: false}
  const baseURL = 'http://127.0.0.1:8000'
  const request = jest
    .spyOn(api, 'getBuildingInfo')
    .mockImplementationOnce(()=>Promise.resolve({
      data: {
        info: "hello, world!",
        restaurants: ["rests"],
        seminars: ["semis"],
        lectures: ["lecs"],
        posts: ["posts"]
      }
    }))
    .mockImplementationOnce(()=>Promise.resolve({
      data: {
        info: "hello, world!",
        restaurants: ["rests"],
        seminars: ["semis"],
        lectures: ["lecs"],
        posts: ["posts"]
      }
    }))
    .mockImplementationOnce(()=>Promise.resolve({
      error: "error"
    }))
  let store, component

  it('renders correctly', ()=>{
    const sagaMiddleware = createSagaMiddleware()
    const mockStore = configureStore([sagaMiddleware])
    store = mockStore(initialState)
    sagaMiddleware.run(rootSaga)
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

  it('handleRequestBldgInfo dispatches proper actions', ()=>{
    expect(store.getActions()[1]).toEqual(actions.getBuildingSuccess("hello, world!", ["rests"], ["semis"], ["lecs"], ["posts"]))
  })

  it('dispatches zoomChanged action', ()=>{
    const e = {target: {_zoom: 18}}
    component.find('Map').at(1).prop('onZoomEnd')(e)
    expect(store.getActions()[2]).toEqual(actions.zoomChanged(e.target._zoom))
  })

  it('reducers', async ()=>{
    const e = {latlng: {lat:37.459, lng:126.952}}
    const err_e = {latlng: {lat:37.46283, lng:126.95450}}
    const sagaMiddleware = createSagaMiddleware()

    store = createStore(reducers, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)

    store.dispatch(actions.buildingClick(getBldgNo(e.latlng), e.latlng))
    await Promise.resolve()
    expect(store.getState().selectedBldg.bldgNo).toBe('62')
    expect(store.getState().selectedBldg.info).toBe('hello, world!')
    expect(store.getState().selectedBldg.restaurants).toEqual(['rests'])
    expect(store.getState().selectedBldg.seminars).toEqual(['semis'])
    expect(store.getState().selectedBldg.posts).toEqual(['posts'])
    expect(store.getState().showBldgModal).toBe(true)

    store.dispatch(actions.buildingClick(getBldgNo(err_e.latlng), err_e.latlng))
    await Promise.resolve()
    expect(store.getState().error).toBe('건물 정보를 받아오지 못했습니다.')

    store.dispatch(actions.zoomChanged(18))
    expect(store.getState().zoom).toBe(18)
  })
})
