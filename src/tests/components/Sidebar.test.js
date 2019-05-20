import React from 'react';
import { Sidebar } from '../../components/organisms/Sidebar'
import { shallow } from 'enzyme'

describe('Sidebar', ()=>{
  let component

  it('renders correctly', ()=>{
    component = shallow(<Sidebar/>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has correct menu lists', ()=>{
    expect(component.find('Bootstrap(ListGroupItem)').at(0).text()).toBe('길찾기')
    expect(component.find('Bootstrap(ListGroupItem)').at(1).text()).toBe('셔틀 버스')
    expect(component.find('Bootstrap(ListGroupItem)').at(2).text()).toBe('세미나')
    expect(component.find('Bootstrap(ListGroupItem)').at(3).text()).toBe('강의실 예약')
    expect(component.find('Bootstrap(ListGroupItem)').at(4).text()).toBe('식당')
  })
})
