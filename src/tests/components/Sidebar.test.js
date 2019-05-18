import React from 'react';
import { Provider } from 'react-redux'
import { Sidebar } from '../../components/organisms/Sidebar'
import ConnectedSideBar from '../../containers/Sidebar'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import * as actions from '../../store/actions'
import reducers from '../../store/reducers'
import { createStore } from 'redux'

describe('Sidebar', ()=>{
  let component
  const mockResClick = jest.fn()

  it('renders correctly', ()=>{
    component = shallow(
      <Sidebar
        onResClick={mockResClick}
      />)
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

  it('calls functions correctly', () => {
    component.find('Bootstrap(ListGroupItem)').at(4).simulate('click')
    expect(mockResClick.mock.calls.length).toBe(1)
  })

})

describe('ConnectedSideBar', () => {
  const mockStore = configureStore()
  let store, component

  it('renders correctly', () =>{
    store = mockStore()
    component = mount(<Provider store={store}><ConnectedSideBar/></Provider>)
  })

  it('matches snapshot', () =>{
    expect(component).toMatchSnapshot()
  })

  it('dispatches sideResClick action', () =>{
    component.find('Bootstrap(ListGroupItem)').at(4).simulate('click')
    expect(store.getActions()[0]).toEqual(actions.sideResClick())
  })

})
