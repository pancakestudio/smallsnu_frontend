import React from 'react'
import { Provider } from 'react-redux'
import { PostModal } from '../../../components/pages/PostModal'
import ConnectedPostModal from '../../../containers/PostModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'
import * as actions from '../../../store/actions'

describe('PostModal', () => {
  let component
  const mockShowWritePostModal = jest.fn()
  const mockEdit = jest.fn()
  const mockDelete = jest.fn()
  const mockLike = jest.fn()
  const mockEditComment = jest.fn()
  const mockDeleteComment = jest.fn()
  const mockLikeComment = jest.fn()
  global.window = { location: { pathname: '/post/1' } };

  it('renders correctly', () => {
    component = shallow(
    <PostModal
      post = {{
        "id" : 1,
        "username" : "user1",
        "title": "post1",
        "content": "post content 1",
        "building":{
          "code":"301",
        },
        "comments": [
          {
            "id" : 1,
            "content": "comment1",
            "username": "user1"
          },
          {
            "id" : 2,
            "content": "comment2",
            "username": "user2"
          },
        ]
      }}
      onShowWritePostModal = {mockShowWritePostModal}
      onEdit = {mockEdit}
      onDelete = {mockDelete}
      onLike = {mockLike}
      onEditComment = {mockEditComment}
      onDeleteComment = {mockDeleteComment}
      onLikeComment = {mockLikeComment}
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
    component.find('Button').at(1).simulate('click')
    expect(mockEdit.mock.calls.length).toBe(1)
    component.find('Button').at(2).simulate('click')
    expect(mockDelete.mock.calls.length).toBe(1)
    component.find('.like').simulate('click')
    expect(mockLike.mock.calls.length).toBe(1)
    component.find('.editComment').at(0).simulate('click')
    expect(mockEditComment.mock.calls.length).toBe(1)
    component.find('.deleteComment').at(0).simulate('click')
    expect(mockDeleteComment.mock.calls.length).toBe(1)
    component.find('.likeComment').at(0).simulate('click')
    expect(mockLikeComment.mock.calls.length).toBe(1)
    component.find('.back').simulate('click')
    expect(global.window.location.pathname).toEqual('/board/301')
    component.find('Bootstrap(Modal)').simulate('hide')
    expect(global.window.location.pathname).toEqual('/')
  })

  it('handles undefined data correctly', ()=>{
    component.setProps({post: undefined})
    expect(component.find('ModalSpinner').exists()).toBe(true)
  })
})

describe('ConnectedPostModal', () => {
  const post = {
    "id" : "2",
    "username" : "user1",
    "password" : "1234",
    "title": "post1",
    "content": "post content 1",
    "building":{
      "code":"301",
    },
    "comments": [
      {
        "id" : "3",
        "content": "comment1",
        "username": "user1"
      },
      {
        "id" : "4",
        "content": "comment2",
        "username": "user2"
      },
    ]
  }
  const initialState = {
    selectedPost: post
  }
  const mockStore = configureStore()
  let store, component

  it('renders correctly', ()=>{
    store = mockStore(initialState)
    component = mount(<Provider store={store}><ConnectedPostModal/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('dispatches showWritePostModal action and editPostFlag action correctly', ()=>{
    component.find('Button').at(1).prop('onClick')()
    expect(store.getActions()[0]).toEqual(actions.showEditPost(post))
  })

  it('dispatches showPasswordCheck action correctly', ()=>{
    component.find('Button').at(2).prop('onClick')()
    expect(store.getActions()[1]).toEqual(actions.showPasswordCheck(post))
  })

  it('dispatches postLike action correctly', ()=>{
    component.find('Button').at(3).prop('onClick')()
    expect(store.getActions()[2]).toEqual(actions.postLike('2'))
  })

  it('dispatches showEditComment action correctly', ()=>{
    component.find('DropdownToggle').at(0).simulate('click')
    component.find('.editComment').at(0).prop('onClick')()
    expect(store.getActions()[3]).toEqual(actions.showEditComment(
      {
        "id" : "3",
        "content": "comment1",
        "username": "user1"
      }
    ))
  })

  it('dispatches comment showPasswordCheck action correctly', ()=>{
    component.find('.deleteComment').at(0).prop('onClick')()
    expect(store.getActions()[4]).toEqual(actions.showPasswordCheck(
      {
        "id" : "3",
        "content": "comment1",
        "username": "user1"
      }
    ))
  })

  it('dispatches commentLike action correctly', ()=>{
    component.find('.likeComment').at(0).prop('onClick')()
    expect(store.getActions()[5]).toEqual(actions.commentLike('3', '2'))
  })
})
