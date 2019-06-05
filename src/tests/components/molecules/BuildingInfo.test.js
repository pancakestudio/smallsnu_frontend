import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BuildingInfo } from '../../../components/molecules/BuildingInfo'
import * as actions from '../../../store/actions'
import reducers from '../../../store/reducers'

describe('BuildingInfo', ()=>{
  global.window = { location: { pathname: null } };
  let component
  const mockPostListClick = jest.fn()
  const mockSeminarListClick = jest.fn()
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
    }],
    seminars: [{
      "id": 1,
      "title": "[Seminar] Autonomous Driving: Simulation and Navigation",
      "talker": "Dinesh ManochaDepartment of Computer Science and Electrical & Computer Engineering, University of Maryland at College Park",
      "where": "302동 309-1호",
      "time": "2019년 3월 28일 목요일 PM 1:30 - 2019년 3월 28일 목요일 PM 2:30",
      "link": "https://cse.snu.ac.kr/node/36950"
    }]
  }

  it('renders correctly', ()=>{
    component = shallow(
      <BuildingInfo 
        bldgNo={'301'}
        rests={bldg.restaurants}
        posts={bldg.posts}
        semis={bldg.seminars}
      />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has respreviews, postpreviews, and semipreviews', ()=>{
    expect(component.find('ResPreview').exists()).toBe(true)
    expect(component.find('PostPreview').exists()).toBe(true)
    expect(component.find('SemiPreview').exists()).toBe(true)
  })

  it('calls functions', ()=>{
    component.find('PostPreview').prop('onClick')()
    expect(global.window.location.pathname).toEqual('/post/1')
    component.find('SemiPreview').prop('onClick')()
    expect(global.window.location.pathname).toEqual('/seminar/1')
    component.find('.postListButton').simulate('click')
    expect(global.window.location.pathname).toEqual('/board/301')
    component.find('.semiListButton').simulate('click')
    expect(global.window.location.pathname).toEqual('/seminarlist/301')
  })

  it('handles undefined data', ()=>{
    component.setProps({rests: [], posts: [], semis: []})
    expect(component.find('CardText').at(0).text()).toBe('식당 정보가 없습니다.')
    expect(component.find('CardText').at(1).text()).toBe('세미나 정보가 없습니다.')
    expect(component.find('CardText').at(2).text()).toBe('게시판에 글이 없습니다.')
  })
})
