import React from 'react';
import { Provider } from 'react-redux'
import { RestaurantModal } from '../../components/organisms/RestaurantModal'
import ConnectedRestaurantModal from '../../containers/RestaurantModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import * as actions from '../../store/actions'

describe('RestaurantModal', () => {
  let component
  const mockModalHide = jest.fn()

  it('renders correctly', () => {
    component = shallow(
    <RestaurantModal
        data = {{kr_name : '학생회관 식당'}}
        show = {true}
        onModalHide = {mockModalHide}
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

  it('data is given null', () => {
    component.setProps({data:null})
    expect(component.find('ModalTitle').text()).toBe('')
    component.setProps({data:{kr_name:'학생회관 식당'}})
    expect(component.find('ModalTitle').text()).toBe('학생회관 식당')
  })

  it('calls functions', ()=>{
    component.find('Button').simulate('click')
    expect(mockModalHide.mock.calls.length).toBe(1)
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

  it('dispatches onModalHide action', ()=>{
    component.find('Button').simulate('click')
    expect(store.getActions()[0]).toEqual(actions.modalHide())
  })

})