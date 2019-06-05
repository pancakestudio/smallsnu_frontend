import React from 'react'
import { PostPreview } from '../../../components/atoms/PostPreview'
import { shallow } from 'enzyme'

describe('PostPreview', ()=>{
  let component
  const title = 'title'
  const content = 'content'

  it('renders correctly', ()=>{
    component = shallow(
      <PostPreview
        title={title}
        content={content}
      />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a correct title and content', ()=>{
    expect(component.find('CardTitle').text()).toBe('title')
    expect(component.find('CardText').text()).toBe('content')
  })
})
