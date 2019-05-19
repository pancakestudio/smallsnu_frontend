import React from 'react';
import { RestaurantInfo } from '../../../components/molecules/RestaurantInfo'
import { shallow } from 'enzyme'

describe('RestaurantInfo', () =>{
  let component
  const resInfo = {
    operating_hours: "10:00~12:00"
  }

  it('renders correctly', () => {
    component = shallow(
      <RestaurantInfo
        res={resInfo}
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

  it('handles empty data correctly', ()=>{
    component.setProps({res: null}) 
    expect(component.find('CardText').at(0).text()).toBe('운영 시간 정보가 없습니다.')
    expect(component.find('CardText').at(1).text()).toBe('정보가 없습니다.')
  })
})
