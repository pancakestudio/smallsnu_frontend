import React from 'react'
import { AmenityPreview } from '../../../components/atoms/AmenityPreview'
import { shallow } from 'enzyme'

describe('ResPreview', ()=>{
  let component
  const kr_name = '식당'
  const operating_hours = '시간'

  it('renders correctly', ()=>{
    component = shallow(
      <AmenityPreview
        kr_name={kr_name}
        operating_hours={operating_hours}
      />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has correct name and op hours', ()=>{
    expect(component.find('CardHeader').text()).toBe('식당')
    expect(component.find('Bootstrap(ListGroupItem)').text()).toBe('운영 시간: 시간')
  })
})
