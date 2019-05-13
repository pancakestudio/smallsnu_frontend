import React from 'react'
import { BuildingInfo } from '../../components/molecules/BuildingInfo'
import { shallow } from 'enzyme'

describe('BuildingInfo', ()=>{
  let component
  const bldg = {
    bldgNo: '300',
    info: 'hello, world!',
    restaurants: [{
      id: 1,
      kr_name: '식당',
      operating_hours: ''
    }],
    posts: [{
      id: 1,
      title: 'title',
      content: 'content'
    }]
  }

  it('renders correctly', ()=>{
    component = shallow(
      <BuildingInfo 
        rests={bldg.restaurants}
        posts={bldg.posts}
      />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has respreviews and postpreviews', ()=>{
    expect(component.find('ResPreview').exists()).toBe(true)
    expect(component.find('PostPreview').exists()).toBe(true)
  })
})
