import React from 'react'
import { Provider } from 'react-redux'
import { ATMModal } from '../../../components/organisms/ATMModal'
import ConnectedATMModal from '../../../containers/ATMModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'
import * as actions from '../../../store/actions'

describe('ATMModal', () => {
  let component

  it('renders correctly', () => {
    component = shallow(
      <ATMModal
      atm={{kr_name: '행정관 신한ATM(60동)', bldgNo:'60',
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

  it('has a correct ATM name', ()=>{
    expect(component.find('ModalTitle').text()).toBe('행정관 신한ATM(60동)')
  })

  it('has a correct building name', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(0).text()).toBe('위치: 행정관(60동)')
  })

  it('data is given null', () => {
    component.setProps({atm: null})
    expect(component.find('ModalTitle').text()).toBe('ATM 정보가 없습니다.')
  })

  it('calls functions', ()=>{
    component.find('Bootstrap(Modal)').simulate('hide')
    expect(global.window.location.pathname).toEqual('/')
  })

})

describe('ConnectedATMModal', () => {
  const initialState = {
    selectedATM: {
      kr_name: '행정관 신한ATM(60동)',
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
    component = mount(<Provider store={store}><ConnectedATMModal/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('has a correct atm name', ()=>{
    expect(component.find('ModalTitle').text()).toBe('행정관 신한ATM(60동)')
  })

})
