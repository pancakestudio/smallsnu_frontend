import React from 'react'
import { EtcPreview } from '../../components/atoms/EtcPreview'
import { shallow } from 'enzyme'

describe('EtcPreview', () =>{
  let component

  it('renders correctly', () =>{
    component = shallow(
      <EtcPreview/>
    )
  })

  it('matches snapshot', () =>{
    expect(component).toMatchSnapshot()
  })

  it('has correct etc data', () =>{
    expect(component.find('Bootstrap(ListGroupItem)').text()).toBe('etc')
  })
})
