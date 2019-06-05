import React from 'react';
import { Provider } from 'react-redux'
import { SearchBar } from '../../../components/molecules/SearchBar'
import ConnectedSearchBar from '../../../containers/SearchBar'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { getBldgCoord, getKeyword } from '../../../utils/Functions'
import * as actions from '../../../store/actions'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'

describe('SearchBar', ()=>{
  let component
  const mockSearchValueChange = jest.fn()
  const mockSearch = jest.fn()
  const mockSearchBuilding = jest.fn()
  const mockSearchRestaurant = jest.fn()
  const mockSearchSeminar = jest.fn()
  const mockSearchATM = jest.fn()
  const mockSearchCafe = jest.fn()
  const mockSearchBank = jest.fn()
  const mockSearchConv = jest.fn()
  const mockpreventDefault = jest.fn()

  it('renders correctly', ()=>{
    component = shallow(
      <SearchBar
        onSearchValueChange={mockSearchValueChange}
        onSearch={mockSearch}
        onSearchBuilding={mockSearchBuilding}
        onSearchRestaurant={mockSearchRestaurant}
        onSearchSeminar={mockSearchSeminar}
        onSearchATM={mockSearchATM}
        onSearchCafe={mockSearchCafe}
        onSearchBank={mockSearchBank}
        onSearchConv={mockSearchConv}
      />)
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
    //expect(mockSearchBuilding.mock.calls.length).toBe(1)

    input.simulate('change', {target: {value: '식당'}})
    expect(mockSearchValueChange.mock.calls.length).toBe(2)
    //expect(mockSearchRestaurant.mock.calls.length).toBe(1)

    input.simulate('change', {target: {value: 'atm'}})
    expect(mockSearchValueChange.mock.calls.length).toBe(3)
    //expect(mockSearchATM.mock.calls.length).toBe(1)

    input.simulate('change', {target: {value: 'bank'}})
    expect(mockSearchValueChange.mock.calls.length).toBe(4)
    //expect(mockSearchBank.mock.calls.length).toBe(1)

    input.simulate('change', {target: {value: 'cafe'}})
    expect(mockSearchValueChange.mock.calls.length).toBe(5)
    //expect(mockSearchCafe.mock.calls.length).toBe(1)

    input.simulate('change', {target: {value: 'CU'}})
    expect(mockSearchValueChange.mock.calls.length).toBe(6)
    //expect(mockSearchConv.mock.calls.length).toBe(1)

    input.simulate('change', {target: {value: '세미나'}})
    expect(mockSearchValueChange.mock.calls.length).toBe(7)
    //expect(mockSearchSeminar.mock.calls.length).toBe(1)
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
    expect(store.getActions()[2]).toEqual(actions.requestAllRestaurants())
    expect(store.getActions()[3]).toEqual(actions.toggleResMarker())
  })

  it('dispatches searchSeminar action', () => {
    component.find('input').instance().value = 'seminar'
    component.find('Button').simulate('submit')
    expect(store.getActions()[4]).toEqual(actions.requestAllSeminars())
    expect(store.getActions()[5]).toEqual(actions.toggleSemiMarker())
  })

  it('dispatches searchATM action', () => {
    component.find('input').instance().value = 'ATM'
    component.find('Button').simulate('submit')
    expect(store.getActions()[6]).toEqual(actions.requestAllATMs())
    expect(store.getActions()[7]).toEqual(actions.toggleATMMarker())
  })

  it('dispatches searchBank action', () => {
    component.find('input').instance().value = 'bank'
    component.find('Button').simulate('submit')
    expect(store.getActions()[8]).toEqual(actions.requestAllBanks())
    expect(store.getActions()[9]).toEqual(actions.toggleBankMarker())
  })

  it('dispatches searchCafe action', () => {
    component.find('input').instance().value = 'cafe'
    component.find('Button').simulate('submit')
    expect(store.getActions()[10]).toEqual(actions.requestAllCafes())
    expect(store.getActions()[11]).toEqual(actions.toggleCafeMarker())
  })

  it('dispatches searchConv action', () => {
    component.find('input').instance().value = 'CU'
    component.find('Button').simulate('submit')
    expect(store.getActions()[12]).toEqual(actions.requestAllConves())
    expect(store.getActions()[13]).toEqual(actions.toggleConvMarker())
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
    expect(store.getState().searchedBldg).toBe('200')
    expect(store.getState().currentPos).toBe(getBldgCoord('200'))
  })
})
