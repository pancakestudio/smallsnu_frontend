import React from 'react'
import { Provider } from 'react-redux'
import { BuildingModal } from '../../../components/pages/BuildingModal'
import ConnectedBldgModal from '../../../containers/BuildingModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'
import * as actions from '../../../store/actions'

describe('BuildingModal', ()=>{
  let component
  const mockModalHide = jest.fn()

  it('renders correctly', ()=>{
    component = shallow(
      <BuildingModal bldg={{krName: '제1공학관(301동)', bldgNo: '301'}} />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('has a correct building name', ()=>{
    expect(component.find('ModalTitle').text()).toBe('제1공학관(301동)')
  })

  it('calls functions', ()=>{
    component.find('Bootstrap(Modal)').simulate('hide')
    expect(global.window.location.pathname).toEqual('/')
  })

  it('handles undefined data correctly', ()=>{
    component.setProps({bldg: undefined})
    expect(component.find('ModalSpinner').exists()).toBe(true)
  })
})

describe('ConnectedBuilingModal', ()=>{
  const initialState = {
    selectedBldg: {
      krName: '300동',
      bldgNo: '300'
    },
    showBldgModal: true
  }
  const mockStore = configureStore()
  let store, component

  it('renders correctly', ()=>{
    store = mockStore(initialState)
    component = mount(<Provider store={store}><ConnectedBldgModal/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('has a correct building name', ()=>{
    expect(component.find('ModalTitle').text()).toBe('300동')
  })
})
