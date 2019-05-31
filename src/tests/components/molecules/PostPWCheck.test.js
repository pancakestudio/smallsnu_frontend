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
  })

  it('calls functions', () => {
    component.find('Bootstrap(Modal)').simulate('hide')
    expect(global.window.location.pathname).toEqual('/')
  })

})

describe('ConnectedPostPWCheck', () => {
  const mockStore = configureStore()
  let store, component
  const post = {
    id: 1,
    title: 'title',
    content: 'content',
    username: 'user',
    password: '1234'
  }

  it('renders correctly', () => {
    store = mockStore()
    component = mount(<Provider store = {store}><ConnectedPostPWCheck/></Provider>)
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  // it('has form, form control, and button', ()=>{
  //   expect(component.find('FormControl').exists()).toBe(true)
  //   expect(component.find('Button').exists()).toBe(true)
  // })
  //
  // it('calls functions', () => {
  //   component.find('FormControl').instance().value = '1234'
  //   component.find('Button').simulate('submit')
  //   expect(store.getActions()[0]).toEqual(actions.deletePost(post,'301'))
  // })

})
