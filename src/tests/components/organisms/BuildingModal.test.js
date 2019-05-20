import React from 'react'
import { Provider } from 'react-redux'
import { BuildingModal } from '../../../components/organisms/BuildingModal'
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
      <BuildingModal bldg={{bldgNo: '301'}}
        show={true}
        onModalHide={mockModalHide}
      />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('has a correct building number', ()=>{
    expect(component.find('ModalTitle').text()).toBe('301동')
  })

  it('calls functions', ()=>{
    component.find('Bootstrap(Modal)').simulate('hide')
    expect(mockModalHide.mock.calls.length).toBe(1)
  })
})

describe('ConnectedBuilingModal', ()=>{
  const initialState = {
    selectedBldg: {
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

  it('dispatches onModalHide action', ()=>{
    component.find('Bootstrap(Modal)').prop('onHide')()
    expect(store.getActions()[0]).toEqual(actions.modalHide())
  })

  it('reducers', ()=>{
    store = createStore(reducers, initialState)
    store.dispatch(actions.modalHide())
    expect(store.getState().showBldgModal).toBe(false)
  })
})