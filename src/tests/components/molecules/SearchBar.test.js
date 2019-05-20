import React from 'react';
import { Provider } from 'react-redux'
import { SearchBar } from '../../../components/molecules/SearchBar'
import ConnectedSearchBar from '../../../containers/SearchBar'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { getBldgCoord } from '../../../utils/Functions'
import * as actions from '../../../store/actions'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'

describe('SearchBar', ()=>{
  let component
  const mockSearchValueChange = jest.fn()
  const mockSearch = jest.fn()

  it('renders correctly', ()=>{
    component = shallow(
      <SearchBar
        onSearchValueChange={mockSearchValueChange}
        onSearch={mockSearch}/>)
  })

  it('has form, form control, and button', ()=>{
    expect(component.find('Form').exists()).toBe(true)
    expect(component.find('FormControl').exists()).toBe(true)
    expect(component.find('Button').exists()).toBe(true)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('calls functions', ()=>{
    const input = component.find('FormControl')
    input.simulate('change', {target: {value: '301'}})
    expect(mockSearchValueChange.mock.calls.length).toBe(1)

    input.simulate('change', {target: {value: '식당'}})
    expect(mockSearchValueChange.mock.calls.length).toBe(2)
  })
})

describe('ConnectedSearchBar', ()=>{
  const mockStore = configureStore()
  let store, component

  it('renders correctly', () => {
    store = mockStore()
    component = mount(<Provider store={store}><ConnectedSearchBar/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has form, form control, and button', ()=>{
    expect(component.find('Form').exists()).toBe(true)
    expect(component.find('FormControl').exists()).toBe(true)
    expect(component.find('Button').exists()).toBe(true)
  })

  it('dispatches searchValueChange action', ()=>{
    const input = component.find('FormControl')
    input.simulate('change', {target: {value: '301'}})
    expect(store.getActions()[0]).toEqual(actions.searchValueChange('301'))
  })

  it('dispatches search action', () => {
    component.find('input').instance().value = '302'
    component.find('Button').simulate('submit')
    expect(store.getActions()[1]).toEqual(actions.search('302', getBldgCoord('302')))
  })

  it('dispatches searchRestaurant action', () => {
    component.find('input').instance().value = 'restaurant'
    component.find('Button').simulate('submit')
    expect(store.getActions()[2]).toEqual(actions.sideResClick())
  })

  it('shows alert on invalid input', ()=>{
    window.alert = jest.fn()
    component.find('input').instance().value = '0'
    component.find('Button').simulate('submit')
    expect(window.alert).toHaveBeenCalledWith("잘못된 검색어 형식입니다.")
  })

  it('reducers', ()=>{
    store = createStore(reducers)
    store.dispatch(actions.searchValueChange('62'))
    expect(store.getState().searchingBldg).toBe('62')
    store.dispatch(actions.search('200', getBldgCoord('200')))
    expect(store.getState().selectedBldg.bldgNo).toBe('200')
    expect(store.getState().currentPos).toBe(getBldgCoord('200'))
  })

  it('reducers', ()=>{
    store = createStore(reducers)
    store.dispatch(actions.searchValueChange('62'))
    expect(store.getState().searchingBldg).toBe('62')
    store.dispatch(actions.search('200', getBldgCoord('200')))
    expect(store.getState().selectedBldg.bldgNo).toBe('200')
    expect(store.getState().currentPos).toBe(getBldgCoord('200'))
  })
})