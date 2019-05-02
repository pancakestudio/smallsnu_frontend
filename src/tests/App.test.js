import React from 'react';
import App from '../App';
import { shallow } from 'enzyme'

describe('App', ()=>{
  let component

  it('renders correctly', () => {
    component = shallow(<App />)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a main page', ()=>{
    expect(component.find('Main').exists()).toBe(true)
  })

})
