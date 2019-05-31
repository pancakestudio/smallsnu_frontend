import React from 'react'
import { Provider } from 'react-redux'
import { CafeModal } from '../../../components/organisms/CafeModal'
import ConnectedCafeModal from '../../../containers/CafeModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'
import * as actions from '../../../store/actions'

describe('CafeModal', () => {
  let component

  it('renders correctly', () => {
    component = shallow(
      <CafeModal
      cafe={{kr_name: 'cafe', bldgNo:'60',
        building:{
          code: "60",
          kr_name: "행정관(60동)"}}}
      />
    )
  })

  it('has a correct Cafe name', ()=>{
    expect(component.find('ModalTitle').text()).toBe('cafe')
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

describe('ConnectedCafeModal', () => {
  const initialState = {
    selectedCafe: {
      kr_name: 'cafe',
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
    component = mount(<Provider store={store}><ConnectedCafeModal/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('has a correct Cafe name', ()=>{
    expect(component.find('ModalTitle').text()).toBe('cafe')
  })

})
