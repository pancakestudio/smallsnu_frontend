import React from 'react';
import { Header } from '../../../components/organisms/Header'
import { shallow } from 'enzyme'

describe('Header', ()=>{
  let component

  it('renders correctly', ()=>{
    component = shallow(<Header/>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a title and a menu button', ()=>{
    expect(component.find('.menu').exists()).toBe(true)
    expect(component.find('.title').exists()).toBe(true)
  })
})
