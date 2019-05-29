import React from 'react'
import moment from 'moment'
import { PostPreview } from '../../../components/atoms/PostPreview'
import { shallow } from 'enzyme'

describe('PostPreview', ()=>{
  let component
  let created = moment()
  const title = 'title'
  const content = 'content'

  it('renders correctly', ()=>{
    component = shallow(
      <PostPreview
        title={title}
        content={content}
        username="username"
        created={created}
      />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('handles created date correctly', ()=>{
    expect(component.find('CardFooter').text()).toBe('username | 방금')
    created = moment().add(-30, 'minutes')
    component.setProps({created: created})
    expect(component.find('CardFooter').text()).toBe('username | 30분 전')
    created = moment().add(-4, 'hours')
    component.setProps({created: created})
    expect(component.find('CardFooter').text()).toBe(`username | ${created.format('HH:mm')}`)
    created = moment().add(-2, 'days')
    component.setProps({created: created})
    expect(component.find('CardFooter').text()).toBe(`username | ${created.format('YYYY.MM.DD')}`)
  })

  it('has a correct title and content', ()=>{
    expect(component.find('CardTitle').text()).toBe('title')
    expect(component.find('CardText').text()).toBe('content')
  })
})
