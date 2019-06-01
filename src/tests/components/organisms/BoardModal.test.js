import React from 'react'
import { Provider } from 'react-redux'
import { BoardModal } from '../../../components/organisms/BoardModal'
import ConnectedBoardModal from '../../../containers/BoardModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'
import * as actions from '../../../store/actions'

describe('BoardModal', () => {
  let component
  global.window = { location: { pathname: null } };

  it('renders correctly', () => {
    component = shallow(
    <BoardModal
      bldgNo = '301'
      posts = {[{
        "id" : 1,
        "username" : "user1",
        "password" : "1234",
        "title": "post1",
        "content": "post content 1"
      },
      {
        "id" : 2,
        "username": "user2",
        "password": "1234",
        "title": "post2",
        "content": "post content 2"
      }]}
      activePage = {1}
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

describe('ConnectedBoardModal', () => {
  const initialState = {
    selectedPostList:[{
      "id" : 1,
      "username" : "user1",
      "password" : "1234",
      "title": "post1",
      "content": "post content 1"
    },
    {
      "id" : 2,
      "username": "user2",
      "password": "1234",
      "title": "post2",
      "content": "post content 2"
    }],
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

})
