import React from 'react'
import { Provider } from 'react-redux'
import { ConvModal } from '../../../components/organisms/ConvModal'
import ConnectedConvModal from '../../../containers/ConvModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'
import * as actions from '../../../store/actions'

describe('ConvModal', () => {
  let component

  it('renders correctly', () => {
    component = shallow(
      <ConvModal
      conv={{kr_name: 'conv', bldgNo:'60',
        building:{
          code: "60",
          kr_name: "행정관(60동)"}}}
      show = {true}
      />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('has a correct Conv name', ()=>{
    expect(component.find('ModalTitle').text()).toBe('conv')
  })

  it('has a correct building name', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(0).text()).toBe('위치: 행정관(60동)')
  })

  it('data is given null', () => {
    component.setProps({conv: null})
    expect(component.find('ModalTitle').text()).toBe('편의점 정보가 없습니다.')
  })

  it('calls functions', ()=>{
    component.find('Bootstrap(Modal)').simulate('hide')
    expect(global.window.location.pathname).toEqual('/')
  })

})

describe('ConnectedConvModal', () => {
  const initialState = {
    selectedConv: {
      kr_name: 'conv',
      bldgNo: '60',
      building:{
        code: "60",
        kr_name: "행정관(60동)"}
    }
  }
  const mockStore = configureStore()
  let store, component

  it('renders correctly', ()=>{
    store = mockStore(initialState)
    component = mount(<Provider store={store}><ConnectedConvModal/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('has a correct Bank name', ()=>{
    expect(component.find('ModalTitle').text()).toBe('conv')
  })

})
