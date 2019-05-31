import React from 'react'
import { Provider } from 'react-redux'
import { BankModal } from '../../../components/organisms/BankModal'
import ConnectedBankModal from '../../../containers/BankModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'
import * as actions from '../../../store/actions'

describe('BankModal', () => {
  let component

  it('renders correctly', () => {
    component = shallow(
      <BankModal
      bank={{kr_name: '은행', bldgNo:'60',
        building:{
          code: "60",
          kr_name: "행정관(60동)"}}}
      />
    )
  })

  it('has a correct Bank name', ()=>{
    expect(component.find('ModalTitle').text()).toBe('은행')
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('calls functions', ()=>{
    component.find('Bootstrap(Modal)').simulate('hide')
    expect(global.window.location.pathname).toEqual('/')
  })

})

describe('ConnectedBankModal', () => {
  const initialState = {
    selectedBank: {
      kr_name: '은행',
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
    component = mount(<Provider store={store}><ConnectedBankModal/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('has a correct Bank name', ()=>{
    expect(component.find('ModalTitle').text()).toBe('은행')
  })

})
