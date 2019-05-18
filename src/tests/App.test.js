import React from 'react';
import { Provider } from 'react-redux'
import  App  from '../App';
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'

describe('App', ()=>{
  const initialState = {selectedBldg: {bldgNo: '300'}, error: ""}
  const mockStore = configureStore()
  let store, component

  it('renders correctly', () => {
    store = mockStore(initialState)
    component = mount(<Provider store={store}><App /></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a main page', ()=>{
    expect(component.find('Main').exists()).toBe(true)
  })
})
