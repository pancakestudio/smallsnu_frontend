import React from 'react'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import ConnectedPasswordCheck from '../../../containers/PasswordCheck'
import { createStore } from 'redux'
import { PasswordCheck } from '../../../components/molecules/PasswordCheck'
import * as actions from '../../../store/actions'
import reducers from '../../../store/reducers'

describe('PasswordCheck', () => {
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
      <PasswordCheck
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

})

describe('ConnectedPasswordCheck', () => {
  const mockStore = configureStore()
  let store, component
  const post = {
    id: 1,
    title: 'title',
    content: 'content',
    username: 'user',
    building: {
      code: '301'
    }
  }
  const initialState = {
    showPasswordCheck: true,
    deleteTarget: post
  }

  it('renders correctly', () => {
    store = mockStore(initialState)
    component = mount(
      <Provider store = {store}>
        <ConnectedPasswordCheck/>
      </Provider>
    )
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
    expect(store.getActions()[0]).toEqual(actions.deletePost(post, '301', '1234'))
  })

  // Should add saga test codes
})
