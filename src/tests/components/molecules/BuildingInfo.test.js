import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BuildingInfo } from '../../../components/molecules/BuildingInfo'
import ConnectedBuildingInfo from '../../../containers/BuildingInfo'
import * as actions from '../../../store/actions'
import reducers from '../../../store/reducers'

describe('BuildingInfo', ()=>{
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
        rests={bldg.restaurants}
        posts={bldg.posts}
        semis={bldg.seminars}
        onPostListClick={mockPostListClick}
        onSeminarListClick={mockSeminarListClick}
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
    component.find('.postListButton').simulate('click', {})
    expect(mockPostListClick.mock.calls.length).toBe(1)
    component.find('.semiListButton').simulate('click', {})
    expect(mockSeminarListClick.mock.calls.length).toBe(1)
  })

  it('handles undefined data', ()=>{
    component.setProps({rests: [], posts: [], semis: []})
    expect(component.find('CardText').at(0).text()).toBe('식당 정보가 없습니다.')
    expect(component.find('CardText').at(1).text()).toBe('세미나 정보가 없습니다.')
    expect(component.find('CardText').at(2).text()).toBe('게시판에 글이 없습니다.')
  })
})

describe('ConnectedBuildingInfo',()=>{
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
  const mockStore = configureStore()
  let store, component

  it('renders correctly', ()=>{
    store = mockStore()
    component = mount(
      <Provider store={store}>
        <ConnectedBuildingInfo
          rests={bldg.restaurants}
          posts={bldg.posts}
          semis={bldg.seminars}
        />
      </Provider>
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

  it('dispatches showPost action', ()=>{
    component.find('PostPreview').prop('onClick')()
    expect(store.getActions()[0]).toEqual(actions.showPost(bldg.posts[0]))
  })

  it('dispatches showSeminar action', ()=>{
    component.find('SemiPreview').prop('onClick')()
    expect(store.getActions()[1]).toEqual(actions.showSeminar(bldg.seminars[0]))
  })

  it('dispatches showPostList action', ()=>{
    component.find('.postListButton').at(0).prop('onClick')()
    expect(store.getActions()[2]).toEqual(actions.showPostList(bldg.posts))
  })

  it('dispatches showSeminarList action', ()=>{
    component.find('.semiListButton').at(0).prop('onClick')()
    expect(store.getActions()[3]).toEqual(actions.showSeminarList(bldg.seminars))
  })

  it('reducers', ()=>{
    store = createStore(reducers)
    store.dispatch(actions.showPost(bldg.posts[0]))

    expect(store.getState().selectedPost).toBe(bldg.posts[0])
    expect(store.getState().showPostModal).toBe(true)

    store.dispatch(actions.showSeminar(bldg.seminars[0]))

    expect(store.getState().selectedSemi).toBe(bldg.seminars[0])
    expect(store.getState().showSemiModal).toBe(true)

    store.dispatch(actions.showSeminarList(bldg.seminars))

    expect(store.getState().selectedSemiList).toBe(bldg.seminars)
    expect(store.getState().showSemiListModal).toBe(true)
  })
})
