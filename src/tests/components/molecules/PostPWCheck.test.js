import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import ConnectedPostPWCheck from '../../../containers/PostPWCheck'
import { createStore } from 'redux'
import { PostPWCheck } from '../../../components/molecules/PostPWCheck'
import * as actions from '../../../store/actions'
import reducers from '../../../store/reducers'

describe('PostPWCheck', () => {
  global.window = { location: { pathname: null } };
  let component
  const mockDelete = jest.fn()
  const mockHideModal = jest.fn()
  const post = {
    id: 1,
    title: 'title',
    content: 'content',
    username: 'user',
    password: '1234'
  }
  it('renders correctly', () => {
    component = shallow(
      <PostPWCheck
        show = {true}
        post = {post}
        bldgNo={'301'}
        onDelete = {mockDelete}
      />
    )
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('has form, form control, and button', ()=>{
    expect(component.find('FormControl').exists()).toBe(true)
    expect(component.find('Button').exists()).toBe(true)
    expect(component.find('ModalTitle').text()).toBe('비밀번호 확인')
  })

  it('calls functions', () => {
    component.find('Bootstrap(Modal)').simulate('hide')
    expect(global.window.location.pathname).toEqual('/')
  })

  it('correct password', () => {

  })
})

describe('ConnectedPostPWCheck', () => {
  const mockStore = configureStore()
  let store, component
  const initialState = {
    showPostPWCheck: true,
    selectedPost: {
      id: 1,
      title: 'title',
      content: 'content',
      username: 'user',
      password: '1234'
    },
    selectedBoardBldgNo: '301'
  }
  const post = {
    id: 1,
    title: 'title',
    content: 'content',
    username: 'user',
    password: '1234'
  }

  it('renders correctly', () => {
    store = mockStore(initialState)
    component = mount(<Provider store = {store}><ConnectedPostPWCheck/></Provider>)
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('correct password', () => {
    component.find('input').instance().value = '1234'
    component.find('Button').simulate('click')
    expect(store.getActions()[0]).toEqual(actions.deletePost(post,'301'))
    expect(store.getActions()[1]).toEqual(actions.hidePostPWCheck())
  })

  it('incorrect password', () => {
    window.alert = jest.fn()
    component.find('input').instance().value = '1'
    component.find('Button').simulate('click')
    expect(window.alert).toHaveBeenCalledWith('비밀번호가 틀렸습니다')
  })

})
