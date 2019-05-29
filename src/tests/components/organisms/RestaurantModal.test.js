import React from 'react';
import { Provider } from 'react-redux'
import { RestaurantModal } from '../../../components/organisms/RestaurantModal'
import ConnectedRestaurantModal from '../../../containers/RestaurantModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import * as actions from '../../../store/actions'

describe('RestaurantModal', () => {
  global.window = { location: { pathname: null } };
  let component

  it('renders correctly', () => {
    component = shallow(
    <RestaurantModal
        res = {{kr_name:'학생회관 식당', building: {kr_name: "학생회관"}}}
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
    expect(component.find('Bootstrap(ListGroupItem)').at(0).text()).toBe('위치: 학생회관')
  })

  it('data is given null', () => {
    component.setProps({res: null})
    expect(component.find('ModalTitle').text()).toBe('식당 정보가 없습니다.')
  })

  it('calls functions', ()=>{
    component.find('Bootstrap(Modal)').simulate('hide')
    expect(global.window.location.pathname).toEqual('/')
  })
})

describe('ConnectedRestaurantModal', () => {
  const initialState = {mapResInfo:{kr_name: '학생회관 식당'}, showResModal: true}
  const mockStore = configureStore()
  let store, component

  it('renders correctly', () => {
    store = mockStore(initialState)
    component = mount(<Provider store={store}><ConnectedRestaurantModal/></Provider>)
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})
