import React from 'react';
import createSagaMiddleware from 'redux-saga'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { Sidebar } from '../../../components/organisms/Sidebar'
import ConnectedSidebar from '../../../containers/Sidebar'
import * as actions from '../../../store/actions'
import rootSaga from '../../../store/sagas'
import reducers from '../../../store/reducers'
import * as api from '../../../services/api'

describe('Sidebar', ()=>{
  let component

  it('renders correctly', ()=>{
    component = shallow(<Sidebar/>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has correct menu lists', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(0).text()).toBe('길찾기')
    expect(component.find('Bootstrap(ListGroupItem)').at(1).text()).toBe('셔틀 버스')
    expect(component.find('Bootstrap(ListGroupItem)').at(2).text()).toBe('세미나')
    expect(component.find('Bootstrap(ListGroupItem)').at(3).text()).toBe('강의실 예약')
    expect(component.find('Bootstrap(ListGroupItem)').at(4).text()).toBe('식당')
  })
})

describe('ConnectedSidebar', ()=>{
  const seminar = {
    "title": "[Seminar] Autonomous Driving: Simulation and Navigation",
    "talker": "Dinesh ManochaDepartment of Computer Science and Electrical & Computer Engineering, University of Maryland at College Park",
    "where": "302동 309-1호",
    "time": "2019년 3월 28일 목요일 PM 1:30 - 2019년 3월 28일 목요일 PM 2:30",
    "link": "https://cse.snu.ac.kr/node/36950"
  }
  const baseURL = 'http://127.0.0.1:8000'
  const request = jest
    .spyOn(api, 'getSeminarInfo')
    .mockImplementationOnce(()=>Promise.resolve({
      data: [seminar]
    }))
    .mockImplementationOnce(()=>Promise.resolve({
      data: [seminar]
    }))
    .mockImplementationOnce(()=>Promise.resolve({
      error: "error"
    }))
  let store, component

  it('renders correctly', ()=>{
    const sagaMiddleware = createSagaMiddleware()
    const mockStore = configureStore([sagaMiddleware])
    store = mockStore()
    sagaMiddleware.run(rootSaga)
    component = mount(<Provider store={store}><ConnectedSidebar/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has correct menu lists', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(0).text()).toBe('길찾기')
    expect(component.find('Bootstrap(ListGroupItem)').at(1).text()).toBe('셔틀 버스')
    expect(component.find('Bootstrap(ListGroupItem)').at(2).text()).toBe('세미나')
    expect(component.find('Bootstrap(ListGroupItem)').at(3).text()).toBe('강의실 예약')
    expect(component.find('Bootstrap(ListGroupItem)').at(4).text()).toBe('식당')
  })

  it('dispatches sideSeminarClick action', ()=>{
    component.find('Bootstrap(ListGroupItem)').at(2).prop('onClick')()
    expect(store.getActions()[0]).toEqual(actions.sideSeminarClick())
  })

  it('handleRequestSemiInfo dispatches proper actions', ()=>{
    expect(store.getActions()[1]).toEqual(actions.getSeminarSuccess([seminar]))
  })

  it('reducers', async ()=>{
    const sagaMiddleware = createSagaMiddleware()
    store = createStore(reducers, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)

    store.dispatch(actions.sideSeminarClick())
    expect(store.getState().showSemiMarkers).toEqual(true)
    await Promise.resolve()
    expect(store.getState().seminarList).toEqual([seminar])

    store.dispatch(actions.sideSeminarClick())
    expect(store.getState().showSemiMarkers).toEqual(false)
    await Promise.resolve()
    expect(store.getState().error).toBe('세미나 정보를 받아오지 못했습니다.')
  })
})
