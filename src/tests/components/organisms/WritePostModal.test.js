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
      isEdit = {false}
      editPost = {editPost}
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
    expect(global.window.location.pathname).toEqual('/board/301')
  })
})

describe('ConnectedWritePostModal', ()=>{
  const initialState = {
    showWritePostModal : true,
    selectedBoardBldgNo : '301',
    isEdit: true,
    selectedPost: {
      "title": "hi",
      "content": "hello",
      "username": "sc",
      "password": "1234"
    }
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
