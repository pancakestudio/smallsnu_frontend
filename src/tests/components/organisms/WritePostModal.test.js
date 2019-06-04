import React from 'react'
import { Provider } from 'react-redux'
import { WritePostModal } from '../../../components/organisms/WritePostModal'
import ConnectedWritePostModal from '../../../containers/WritePostModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'
import * as actions from '../../../store/actions'

describe('WritePostModal', ()=>{
  let component
  const mockHide = jest.fn()
  const mockSavePost = jest.fn()
  const mockEditPost = jest.fn()

  let editPost = {
    "title": "hi",
    "content": "hello",
    "username": "sc",
    "password": "1234"
  }

  it('renders correctly', ()=>{
    component = shallow(
      <WritePostModal
      bldgNo = '301'
      show = {true}
      onHide = {mockHide}
      isEdit = {false}
      onSavePost = {mockSavePost}
      onEditPost = {mockEditPost}
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
    component.find('Bootstrap(Modal)').simulate('hide')
    expect(mockHide.mock.calls.length).toBe(1)
  })

  it('write new post', () => {
    // expect(component.find('ModalTitle').text()).toBe('새로운 게시글')
    // const titleInput = component.find('FormControl').at(0)
    // titleInput.simulate('change', {target:{value:'postInput'}})
    // const textInput = component.find('FormControl').at(1)
    // textInput.simulate('change', {target:{value:'textInput'}})
    // const userNameInput = component.find('FormControl').at(2)
    // userNameInput.simulate('change', {target:{value:'user1'}})
    // const passwordInput = component.find('FormControl').at(3)
    // passwordInput.simulate('change', {target:{value:'1234'}})
    // component.find('Button').simulate('click')
    // expect(mockSavePost.mock.calls.length).toBe(1)

  })

})

describe('ConnectedWritePostModal', ()=>{
  const initialState = {
    showWritePostModal : true,
    selectedBoardBldgNo : '301',
    isEdit: false,
  }
  const mockStore = configureStore()
  let store, component

  it('renders correctly', ()=>{
    store = mockStore(initialState)
    component = mount(<Provider store={store}><ConnectedWritePostModal/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('calls functions', ()=>{

  })

})
