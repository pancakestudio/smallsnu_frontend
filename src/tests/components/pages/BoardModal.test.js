import React from 'react'
import { Provider } from 'react-redux'
import { BoardModal } from '../../../components/pages/BoardModal'
import ConnectedBoardModal from '../../../containers/BoardModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'
import * as actions from '../../../store/actions'

const posts = [
  {
    "id" : 1,
    "username" : "user1",
    "title": "post1",
    "content": "post content 1"
  },
  {
    "id" : 2,
    "username": "user2",
    "title": "post2",
    "content": "post content 2"
  },
  {
    "id" : 3,
    "username": "user3",
    "title": "post3",
    "content": "post content 3"
  },
  {
    "id" : 4,
    "username": "user4",
    "title": "post4",
    "content": "post content 4"
  },
  {
    "id" : 5,
    "username": "user5",
    "title": "post5",
    "content": "post content 5"
  },
  {
    "id" : 6,
    "username": "user6",
    "title": "post6",
    "content": "post content 6"
  },
]

describe('BoardModal', () => {
  let component
  const mockWrite = jest.fn()
  const mockPaginationClick = jest.fn()
  global.window = { location: { pathname: null } };

  it('renders correctly', () => {
    component = shallow(
    <BoardModal
      bldgNo = '301'
      posts = {posts}
      activePage = {1}
      onPaginationClick = {mockPaginationClick}
      onWrite = {mockWrite}
    />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('calls functions', ()=>{
    component.find('PageItem').at(1).simulate('click')
    expect(mockPaginationClick.mock.calls.length).toBe(1)
    component.find('Prev').simulate('click')
    expect(mockPaginationClick.mock.calls.length).toBe(2)
    component.find('Next').simulate('click')
    expect(mockPaginationClick.mock.calls.length).toBe(3)
    component.setProps({activePage: 2})
    component.find('Prev').simulate('click')
    expect(mockPaginationClick.mock.calls.length).toBe(4)
    component.find('Next').simulate('click')
    expect(mockPaginationClick.mock.calls.length).toBe(5)
    component.find('Bootstrap(Modal)').simulate('hide')
    expect(global.window.location.pathname).toEqual('/')
    component.find('.writePost').simulate('click')
    expect(mockWrite.mock.calls.length).toBe(1)
    component.find('.back').simulate('click')
    expect(global.window.location.pathname).toEqual('/building/301')
    component.find('PostPreview').at(0).simulate('click')
    expect(global.window.location.pathname).toEqual('/post/6')
  })

  it('handles no posts correctly', ()=>{
    component.setProps({posts: []})
    expect(component.find('.noPosts').text()).toBe('게시판에 글이 없습니다.')
    component.find('.writePost').simulate('click')
    expect(mockWrite.mock.calls.length).toBe(2)
  })

  it('handles undefined data correctly', ()=>{
    component.setProps({posts: undefined})
    expect(component.find('ModalSpinner').exists()).toBe(true)
  })
})

describe('ConnectedBoardModal', () => {
  const initialState = {
    selectedPostList: posts,
    selectedBoardBldgNo: '301',
    activeBoardPage: 1
  }
  const mockStore = configureStore()
  let store, component

  it('renders correctly', ()=>{
    store = mockStore(initialState)
    component = mount(<Provider store={store}><ConnectedBoardModal/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('dispatches changeBoardPage action', ()=>{
    component.find('Next').prop('onClick')()
    expect(store.getActions()[0]).toEqual(actions.changeBoardPage(2))
  })

  it('dispatches showWritePost action', ()=>{
    component.find('.writePost').at(0).prop('onClick')()
    expect(store.getActions()[1]).toEqual(actions.showWritePost('301'))
  })
})
