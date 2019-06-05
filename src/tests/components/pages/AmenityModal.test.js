import React from 'react'
import { Provider } from 'react-redux'
import { AmenityModal } from '../../../components/pages/AmenityModal'
import ConnectedAmenityModal from '../../../containers/AmenityModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import * as actions from '../../../store/actions'


describe('AmenityModal', () => {
  global.window = { location: { pathname: null } };
  let component

  it('renders correctly', () => {
    component = shallow(
    <AmenityModal
        match = {{params: {amenity: "restaurant", id: "1"}}}
        res = {{
          kr_name:'학생회관 식당',
          building: {kr_name: "학생회관", code: "62"},
          operating_hours:"오전 10시 - 오후 6시",
          location: '학생회관 1층'
        }}
        show = {true}
    />)
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('has a correct restaurant name', ()=>{
    expect(component.find('ModalTitle').text()).toBe('학생회관 식당')
  })

  it('has a correct building name', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(0).text()).toBe('위치: 학생회관 1층')
  })

  it('has a correct operating hours', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(1).text()).toBe('운영 시간: 오전 10시 - 오후 6시')
  })

  it('has a correct cafe name', ()=>{
    component.setProps({match: {params: {amenity: "cafe", id: "1"}}})
    component.setProps({cafe: {
      kr_name: '학생회관 카페',
      building: {kr_name: "학생회관", code: '62'},
      operating_hours:"오전 10시 - 오후 6시",
      location: '학생회관 2층'
    }})
    expect(component.find('ModalTitle').text()).toBe('학생회관 카페')
  })

  it('has a correct building name', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(0).text()).toBe('위치: 학생회관 2층')
  })

  it('has a correct operating hours', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(1).text()).toBe('운영 시간: 오전 10시 - 오후 6시')
  })

  it('has a correct conv name', ()=>{
    component.setProps({match: {params: {amenity: "conv", id: "1"}}})
    component.setProps({conv: {
      kr_name: '학생회관 편의점',
      building: {kr_name: "학생회관", code: '62'},
      operating_hours: "오전 10시 - 오후 10시",
    }})
    expect(component.find('ModalTitle').text()).toBe('학생회관 편의점')
  })

  it('has a correct building name', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(0).text()).toBe('위치: 학생회관')
  })

  it('has a correct operating hours', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(1).text()).toBe('운영 시간: 오전 10시 - 오후 10시')
  })

  it('has a correct bank name', ()=>{
    component.setProps({match: {params: {amenity: "bank", id: "1"}}})
    component.setProps({bank: {
      kr_name: '학생회관 은행',
      building: {kr_name: "학생회관", code: '62'},
      operating_hours: "오전 10시 - 오후 4시",
      location: '학생회관 1층'
    }})
    expect(component.find('ModalTitle').text()).toBe('학생회관 은행')
  })

  it('has a correct building name', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(0).text()).toBe('위치: 학생회관 1층')
  })

  it('has a correct operating hours', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(1).text()).toBe('운영 시간: 오전 10시 - 오후 4시')
  })

  it('has a correct atm name', ()=>{
    component.setProps({match: {params: {amenity: "atm", id: "1"}}})
    component.setProps({atm: {
      kr_name: '학생회관 ATM',
      building: {kr_name: "학생회관", code: '62'},
      operating_hours: "오전 10시 - 오후 9시",
      location: '학생회관 1층'
    }})
    expect(component.find('ModalTitle').text()).toBe('학생회관 ATM')
  })

  it('has a correct building name', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(0).text()).toBe('위치: 학생회관 1층')
  })

  it('has a correct operating hours', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(1).text()).toBe('운영 시간: 오전 10시 - 오후 9시')
  })

  it('handles back correctly', ()=>{
    component.find('.back').simulate('click')
    expect(global.window.location.pathname).toEqual('/building/62')

    component.setProps({atm: {
      kr_name: '학생회관 ATM',
      operating_hours: "오전 10시 - 오후 9시",
      location: '학생회관 1층'
    }})
    component.find('.back').simulate('click')
    expect(global.window.location.pathname).toEqual('/')
  })

  it('calls functions', ()=>{
    component.find('Bootstrap(Modal)').simulate('hide')
    expect(global.window.location.pathname).toEqual('/')
  })
})

describe('ConnectedAmenityModal', () => {
  const initialState = {
    selectedRes: {
      kr_name:'학생회관 식당',
      building: {kr_name: "학생회관", code: "62"},
      operating_hours:"오전 10시 - 오후 6시",
      location: '학생회관 1층'
    }
  }
  const mockStore = configureStore()
  let store, component

  it('renders correctly', () => {
    store = mockStore(initialState)
    component = mount(
      <Provider store={store}>
        <ConnectedAmenityModal match={{params: {amenity: "restaurant", id: "1"}}}/>
      </Provider>
    )
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
