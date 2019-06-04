import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { WriteComment } from '../../../components/molecules/WriteComment'
import ConnectedWriteComment from '../../../containers/WriteComment'
import * as actions from '../../../store/actions'
import reducers from '../../../store/reducers'

describe('WriteComment', () => {
  let component
  const mockSaveComment = jest.fn()
  const mockEditComment = jest.fn()
  const comment = {
    id: "1",
    content: 'content',
    username: 'user',
    post: "1"
  }
  it('renders correctly', () => {
    component = shallow(
      <WriteComment
        edit={false}
        postId="1"
        onSaveComment={mockSaveComment}
        onEditComment={mockEditComment}
      />
    )
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('has a form and button', ()=>{
    expect(component.find('Form').exists()).toBe(true)
    expect(component.find('Button').exists()).toBe(true)
  })

  it('calls functions', () => {
    const p = jest.fn()
    component.find('Form').simulate('submit')
    expect(mockSaveComment.mock.calls.length).toBe(1)
    component.setProps({edit: true, editingComment: comment})
    component.find('Form').simulate('submit')
    expect(mockEditComment.mock.calls.length).toBe(1)
  })
})

describe('ConnectedWriteComment', () => {
  const mockStore = configureStore()
  let store, component
  const comment = {
    content: "content",
    username: "user",
    password: "1234",
  }
  const editingComment = {
    id: "1",
    content: "content",
    username: "user",
    password: "1234",
  }

  it('renders correctly', () => {
    store = mockStore()
    component = mount(
      <Provider store = {store}>
        <ConnectedWriteComment postId="1"/>
      </Provider>
    )
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('has a form and button', ()=>{
    expect(component.find('Form').exists()).toBe(true)
    expect(component.find('Button').exists()).toBe(true)
  })

  it('dispatches saveComment action', () => {
    component.find('textarea').at(0).simulate('change', {target:{value: 'content'}})
    component.find('input').at(0).simulate('change', {target:{value: 'user'}})
    component.find('input').at(1).simulate('change', {target:{value: '1234'}})
    component.find('Form').simulate('submit')
    expect(store.getActions()[0]).toEqual(actions.saveComment(comment, '1'))
  })


  it('dispatches editComment action', () => {
    store = mockStore()
    component = mount(
      <Provider store = {store}>
        <ConnectedWriteComment edit={true} editingComment={editingComment} postId="1"/>
      </Provider>
    )
    component.find('textarea').at(0).simulate('change', {target:{value: 'content'}})
    component.find('input').at(0).simulate('change', {target:{value: 'user'}})
    component.find('input').at(1).simulate('change', {target:{value: '1234'}})
    component.find('Form').simulate('submit')
    expect(store.getActions()[0]).toEqual(actions.editComment(editingComment, '1'))
  })

  it('dispatches saveComment action without change', () => {
    store = mockStore()
    component = mount(
      <Provider store = {store}>
        <ConnectedWriteComment edit={true} editingComment={editingComment} postId="1"/>
      </Provider>
    )
    component.find('Form').simulate('submit')
    expect(store.getActions()[0]).toEqual(actions.editComment(editingComment, '1'))
  })

  // Should add saga test codes
})
