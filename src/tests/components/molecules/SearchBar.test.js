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
  const mockSearch = jest.fn()

  it('renders correctly', ()=>{
    component = shallow(
      <SearchBar
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

/*
  it('dispatches search action', () => {
    const input = component.find('FormControl')
    input.simulate('change', {target: {value: '302'}})
    component.find('Button').simulate('submit')
    expect(store.getActions()[0]).toEqual(actions.search('302', getBldgCoord('302')))
  })

  it('dispatches searchRestaurant action', () => {
    const input = component.find('FormControl')
    input.simulate('change', {target: {value: 'restaurant'}})
    component.find('Button').simulate('submit')
    expect(store.getActions()[1]).toEqual(actions.requestAllRestaurants())
    expect(store.getActions()[2]).toEqual(actions.toggleResMarker())
  })

  it('dispatches searchSeminar action', () => {
    const input = component.find('FormControl')
    input.simulate('change', {target: {value: 'seminar'}})
    component.find('Button').simulate('submit')
    expect(store.getActions()[3]).toEqual(actions.requestAllSeminars())
    expect(store.getActions()[4]).toEqual(actions.toggleSemiMarker())
  })

  it('dispatches searchATM action', () => {
    const input = component.find('FormControl')
    input.simulate('change', {target: {value: 'ATM'}})
    component.find('Button').simulate('submit')
    expect(store.getActions()[5]).toEqual(actions.requestAllATMs())
    expect(store.getActions()[6]).toEqual(actions.toggleATMMarker())
  })

  it('dispatches searchBank action', () => {
    const input = component.find('FormControl')
    input.simulate('change', {target: {value: 'bank'}})
    component.find('Button').simulate('submit')
    expect(store.getActions()[7]).toEqual(actions.requestAllBanks())
    expect(store.getActions()[8]).toEqual(actions.toggleBankMarker())
  })

  it('dispatches searchCafe action', () => {
    const input = component.find('FormControl')
    input.simulate('change', {target: {value: 'cafe'}})
    component.find('Button').simulate('submit')
    expect(store.getActions()[9]).toEqual(actions.requestAllCafes())
    expect(store.getActions()[10]).toEqual(actions.toggleCafeMarker())
  })

  it('dispatches searchConv action', () => {
    const input = component.find('FormControl')
    input.simulate('change', {target: {value: 'CU'}})
    component.find('Button').simulate('submit')
    expect(store.getActions()[11]).toEqual(actions.requestAllConves())
    expect(store.getActions()[12]).toEqual(actions.toggleConvMarker())
  })

  it('shows alert on invalid input', ()=>{
    window.alert = jest.fn()
    const input = component.find('FormControl')
    input.simulate('change', {target: {value: '0'}})
    component.find('Button').simulate('submit')
    expect(window.alert).toHaveBeenCalledWith("잘못된 검색어 형식입니다.")
  })

  it('reducers', ()=>{
    store = createStore(reducers)
    store.dispatch(actions.search('200', getBldgCoord('200')))
    expect(store.getState().searchedBldg).toBe('200')
    expect(store.getState().currentPos).toBe(getBldgCoord('200'))
  })
  */
})
