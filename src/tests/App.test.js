import React from 'react';
import { Provider } from 'react-redux'
import  App  from '../App';
import configureStore from 'redux-mock-store'
import Router from '../BrowserRouter'
import { shallow, mount } from 'enzyme'

describe('App', ()=>{
  const initialState = {selectedBldg: {bldgNo: '300'}, error: "", message: ""}
  const mockStore = configureStore()
  let store, component

  it('renders correctly', () => {
    store = mockStore(initialState)
    component = mount(<Router><Provider store={store}><App /></Provider></Router>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a main page', ()=>{
    expect(component.find('Main').exists()).toBe(true)
  })
})
