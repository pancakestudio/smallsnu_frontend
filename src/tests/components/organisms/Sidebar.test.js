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
    expect(component.find('Bootstrap(ListGroupItem)').at(2).text()).toBe('강의실 예약')
    expect(component.find('Bootstrap(ListGroupItem)').at(3).text()).toBe('세미나')
    expect(component.find('Bootstrap(ListGroupItem)').at(4).text()).toBe('식당')
    expect(component.find('Bootstrap(ListGroupItem)').at(5).text()).toBe('카페')
    expect(component.find('Bootstrap(ListGroupItem)').at(6).text()).toBe('편의점')
    expect(component.find('Bootstrap(ListGroupItem)').at(7).text()).toBe('은행')
    expect(component.find('Bootstrap(ListGroupItem)').at(8).text()).toBe('ATM')
  })

  it('changes className properly', ()=>{
    component.setProps({show: true})
    expect(component.find('.active').exists()).toBe(true)
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
  const restaurant = {
    id: 1,
    kr_name: '식당',
    building: {
      spot: {
        latitude: 37.469,
        longitude: 126.962
      }
    }
  }
  const baseURL = 'http://127.0.0.1:8000'
  const semiRequest = jest
    .spyOn(api, 'getAllSeminarsInfo')
    .mockImplementationOnce(()=>Promise.resolve({
      data: [seminar]
    }))
    .mockImplementationOnce(()=>Promise.resolve({
      data: [seminar]
    }))
    .mockImplementationOnce(()=>Promise.resolve({
      error: "error"
    }))
  const resRequest = jest
    .spyOn(api, 'getAllRestaurantsInfo')
    .mockImplementationOnce(()=>Promise.resolve({
      data: [restaurant]
    }))
    .mockImplementationOnce(()=>Promise.resolve({
      data: [restaurant]
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
    expect(component.find('Bootstrap(ListGroupItem)').at(2).text()).toBe('강의실 예약')
    expect(component.find('Bootstrap(ListGroupItem)').at(3).text()).toBe('세미나')
    expect(component.find('Bootstrap(ListGroupItem)').at(4).text()).toBe('식당')
    expect(component.find('Bootstrap(ListGroupItem)').at(5).text()).toBe('카페')
    expect(component.find('Bootstrap(ListGroupItem)').at(6).text()).toBe('편의점')
    expect(component.find('Bootstrap(ListGroupItem)').at(7).text()).toBe('은행')
    expect(component.find('Bootstrap(ListGroupItem)').at(8).text()).toBe('ATM')
  })

  it('dispatches reqeustAllSeminars and toggleSemiMarker action', ()=>{
    component.find('Bootstrap(ListGroupItem)').at(3).prop('onClick')()
    expect(store.getActions()[0]).toEqual(actions.requestAllSeminars())
    expect(store.getActions()[1]).toEqual(actions.toggleSemiMarker())
  })

  it('handleRequestAllSemiInfo dispatches proper actions', ()=>{
    expect(store.getActions()[2]).toEqual(actions.getAllSeminarsSuccess([seminar]))
  })

  it('dispatches requestAllRestaurants and toggleResMarker action', ()=>{
    component.find('Bootstrap(ListGroupItem)').at(4).prop('onClick')()
    expect(store.getActions()[3]).toEqual(actions.requestAllRestaurants())
    expect(store.getActions()[4]).toEqual(actions.toggleResMarker())
  })

  it('handleRequestAllSemiInfo dispatches proper actions', async ()=>{
    expect(store.getActions()[5]).toEqual(actions.getAllRestaurantsSuccess([restaurant]))
  })

  it('dispatches requestAllCafes and toggleCafeMarker action', ()=>{
    component.find('Bootstrap(ListGroupItem)').at(5).prop('onClick')()
    expect(store.getActions()[6]).toEqual(actions.requestAllCafes())
    expect(store.getActions()[7]).toEqual(actions.toggleCafeMarker())
  })

  it('dispatches requestAllConves and toggleConvMarker action', ()=>{
    component.find('Bootstrap(ListGroupItem)').at(6).prop('onClick')()
    expect(store.getActions()[8]).toEqual(actions.requestAllConves())
    expect(store.getActions()[9]).toEqual(actions.toggleConvMarker())
  })

  it('dispatches requestAllBanks and toggleBankMarker action', ()=>{
    component.find('Bootstrap(ListGroupItem)').at(7).prop('onClick')()
    expect(store.getActions()[10]).toEqual(actions.requestAllBanks())
    expect(store.getActions()[11]).toEqual(actions.toggleBankMarker())
  })

  it('dispatches requestAllATMs and toggleATMMarker action', ()=>{
    component.find('Bootstrap(ListGroupItem)').at(8).prop('onClick')()
    expect(store.getActions()[12]).toEqual(actions.requestAllATMs())
    expect(store.getActions()[13]).toEqual(actions.toggleATMMarker())
  })

  it('reducers', async ()=>{
    const sagaMiddleware = createSagaMiddleware()
    store = createStore(reducers, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)

    store.dispatch(actions.requestAllSeminars())
    store.dispatch(actions.toggleSemiMarker())
    expect(store.getState().showSemiMarkers).toEqual(true)
    await Promise.resolve()
    expect(store.getState().allSeminars).toEqual([seminar])

    store.dispatch(actions.requestAllSeminars())
    await Promise.resolve()
    expect(store.getState().showSemiMarkers).toEqual(false)
    expect(store.getState().error).toBe('세미나 정보를 받아오지 못했습니다.')

    store.dispatch(actions.requestAllRestaurants())
    store.dispatch(actions.toggleResMarker())
    expect(store.getState().showResMarkers).toEqual(true)
    await Promise.resolve()
    expect(store.getState().allRestaurants).toEqual([restaurant])

    store.dispatch(actions.requestAllRestaurants())
    await Promise.resolve()
    expect(store.getState().showResMarkers).toEqual(false)
    expect(store.getState().error).toBe('식당 정보를 받아오지 못했습니다.')
  })
})
