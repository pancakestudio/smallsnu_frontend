import React from 'react'
import { Provider } from 'react-redux'
import { PostModal } from '../../../components/organisms/PostModal'
import ConnectedPostModal from '../../../containers/PostModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'
import * as actions from '../../../store/actions'

describe('PostModal', () => {
  let component
  global.window = { location: { pathname: '/post/1' } };

  it('renders correctly', () => {
    component = shallow(
    <PostModal
      post = {{
        "id" : 1,
        "username" : "user1",
        "password" : "1234",
        "title": "post1",
        "content": "post content 1",
        "building":{
          "code":"301",
        }
      }}
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
    expect(global.window.location.pathname).toEqual('/')
  })

})

describe('ConnectedPostModal', () => {
  const initialState = {
    selectedPost:{
      "id" : 1,
      "username" : "user1",
      "password" : "1234",
      "title": "post1",
      "content": "post content 1",
      "building":{
        "code":"301",
      }
    }
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

})
