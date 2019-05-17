import React from 'react'
import { SemiPreview } from '../../../components/atoms/SemiPreview'
import { shallow } from 'enzyme'

describe('SemiPreview', ()=>{
  let component
  const title = 'title'
  const talker = 'talker'
  const where = 'where'
  const time = 'time'

  it('renders correctly', ()=>{
    component = shallow(
      <SemiPreview
        title={title}
        talker={talker}
        where={where}
        time={time}
      />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a correct title and content', ()=>{
    expect(component.find('CardHeader').text()).toBe('title')
    expect(component.find('Bootstrap(ListGroupItem)').at(0).text()).toBe('강연자: talker')
    expect(component.find('Bootstrap(ListGroupItem)').at(1).text()).toBe('장소: where')
    expect(component.find('Bootstrap(ListGroupItem)').at(2).text()).toBe('시간: time')
  })
})
