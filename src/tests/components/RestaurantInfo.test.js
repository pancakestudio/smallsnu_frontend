import React from 'react';
import { RestaurantInfo } from '../../components/molecules/RestaurantInfo'
import { shallow } from 'enzyme'

describe('RestaurantInfo', () =>{
  let component
  const resInfo = {
    operating_hours: "10:00~12:00"
  }

  it('renders correctly', () => {
    component = shallow(
      <RestaurantInfo
        resInfo={resInfo}
      />
    )
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('has respreviews and etcpreview', () => {
    expect(component.find('ResPreview').exists()).toBe(true)
    expect(component.find('EtcPreview').exists()).toBe(true)
  })
})
