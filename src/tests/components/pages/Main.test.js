import React from 'react';
import createSagaMiddleware from 'redux-saga'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { Main } from '../../../components/pages/Main'
import ConnectedMain from '../../../containers/Main'
import * as actions from '../../../store/actions'
import rootSaga from '../../../store/sagas'
import * as api from '../../../services/api'
import reducers from '../../../store/reducers'
import Router from '../../../BrowserRouter'

describe('Main', ()=>{
  const mockGetBuilding = jest.fn()
  const mockGetRestaurant = jest.fn()
  const mockGetSeminar = jest.fn()
  const mockGetSeminarList = jest.fn()
  const mockGetBoard = jest.fn()
  const mockGetPost = jest.fn()
  let component
  it('renders correctly', ()=>{
    component = shallow(
      <Main
        match={{params: {}}}
        error={""}
        getBuilding={mockGetBuilding}
        getRestaurant={mockGetRestaurant}
        getSeminar={mockGetSeminar}
        getSeminarList={mockGetSeminarList}
        getBoard={mockGetBoard}
        getPost={mockGetPost}
      />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('calls functions', ()=>{
    component.setProps({match: {params: {modal: "building", id: "62"}}})
    expect(mockGetBuilding.mock.calls.length).toBe(1)
    component.setProps({match: {params: {modal: "restaurant", id: "2"}}})
    expect(mockGetRestaurant.mock.calls.length).toBe(1)
    component.setProps({match: {params: {modal: "seminar", id: "3"}}})
    expect(mockGetSeminar.mock.calls.length).toBe(1)
    component.setProps({match: {params: {modal: "seminarlist", id: "301"}}})
    expect(mockGetSeminarList.mock.calls.length).toBe(1)
    component.setProps({match: {params: {modal: "board", id: "302"}}})
    expect(mockGetBoard.mock.calls.length).toBe(1)
    component.setProps({match: {params: {modal: "post", id: "4"}}})
    expect(mockGetPost.mock.calls.length).toBe(1)
  })

})

describe('ConnectedMain', ()=>{
  const buildingRequest = jest
    .spyOn(api, 'getBuildingInfo')
    .mockImplementationOnce(()=>Promise.resolve({
      data: {
        kr_name: "중앙도서관",
        code: "62",
        info: "hello, world!",
        restaurants: ["rests"],
        seminars: ["seminars"],
        lectures: ["lecs"],
        posts: ["posts"]
      }
    }))
    .mockImplementationOnce(()=>Promise.resolve({
      error: "error"
    }))
  const restaurantRequest = jest
    .spyOn(api, 'getRestaurantInfo')
    .mockImplementationOnce(()=>Promise.resolve({
      data: {
        id: "1",
        info: "hello, world!",
      }
    }))
    .mockImplementationOnce(()=>Promise.resolve({
      error: "error"
    }))
  const seminarRequest = jest
    .spyOn(api, 'getSeminarInfo')
    .mockImplementationOnce(()=>Promise.resolve({
      data: {
        id: "2",
        info: "hello, world!",
      }
    }))
    .mockImplementationOnce(()=>Promise.resolve({
      error: "error"
    }))
  const seminarListRequest = jest
    .spyOn(api, 'getBldgSeminarInfo')
    .mockImplementationOnce(()=>Promise.resolve({
      data: [
        {
          id: "3",
          info: "hello, world!",
        }
      ]
    }))
    .mockImplementationOnce(()=>Promise.resolve({
      error: "error"
    }))
  const boardRequest = jest
    .spyOn(api, 'getBoardInfo')
    .mockImplementationOnce(()=>Promise.resolve({
      data: [
        {
          id: "4",
          info: "hello, world!",
        }
      ]
    }))
    .mockImplementationOnce(()=>Promise.resolve({
      error: "error"
    }))
  const postRequest = jest
    .spyOn(api, 'getPostInfo')
    .mockImplementationOnce(()=>Promise.resolve({
      data: {
        id: "5",
        info: "hello, world!",
      }
    }))
    .mockImplementationOnce(()=>Promise.resolve({
      error: "error"
    }))
  let store, component

  it('renders correctly', ()=>{
    const sagaMiddleware = createSagaMiddleware()
    const mockStore = configureStore([sagaMiddleware])
    store = mockStore()
    sagaMiddleware.run(rootSaga)
    component = mount(
      <Router>
        <Provider store={store}>
          <ConnectedMain
            match={{params: {modal: "", id: ""}}}
          />
        </Provider>
      </Router>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('reducers', async ()=>{
    const sagaMiddleware = createSagaMiddleware()

    store = createStore(reducers, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)

    store.dispatch(actions.requestBuilding('62'))
    await Promise.resolve()
    expect(store.getState().selectedBldg.krName).toBe('중앙도서관')
    expect(store.getState().selectedBldg.bldgNo).toBe('62')
    expect(store.getState().selectedBldg.info).toBe('hello, world!')
    expect(store.getState().selectedBldg.restaurants).toEqual(['rests'])
    expect(store.getState().selectedBldg.seminars).toEqual(['seminars'])
    expect(store.getState().selectedBldg.posts).toEqual(['posts'])

    store.dispatch(actions.requestBuilding(0))
    await Promise.resolve()
    expect(store.getState().error).toBe('건물 정보를 받아오지 못했습니다.')

    store.dispatch(actions.requestRestaurant('1'))
    await Promise.resolve()
    expect(store.getState().selectedRes.id).toBe('1')
    expect(store.getState().selectedRes.info).toBe('hello, world!')

    store.dispatch(actions.requestRestaurant(0))
    await Promise.resolve()
    expect(store.getState().error).toBe('식당 정보를 받아오지 못했습니다.')

    store.dispatch(actions.requestSeminar('2'))
    await Promise.resolve()
    expect(store.getState().selectedSemi.id).toBe('2')
    expect(store.getState().selectedSemi.info).toBe('hello, world!')

    store.dispatch(actions.requestSeminar(0))
    await Promise.resolve()
    expect(store.getState().error).toBe('세미나 정보를 받아오지 못했습니다.')

    store.dispatch(actions.requestBldgSeminars('301'))
    await Promise.resolve()
    expect(store.getState().selectedSemiList[0].id).toBe('3')
    expect(store.getState().selectedSemiList[0].info).toBe('hello, world!')

    store.dispatch(actions.requestBldgSeminars(0))
    await Promise.resolve()
    expect(store.getState().error).toBe('세미나 정보를 받아오지 못했습니다.')

    store.dispatch(actions.requestBoard('300'))
    await Promise.resolve()
    expect(store.getState().selectedPostList[0].id).toBe('4')
    expect(store.getState().selectedPostList[0].info).toBe('hello, world!')

    store.dispatch(actions.requestBoard(0))
    await Promise.resolve()
    expect(store.getState().error).toBe('게시판 정보를 받아오지 못했습니다.')

    store.dispatch(actions.requestPost('5'))
    await Promise.resolve()
    expect(store.getState().selectedPost.id).toBe('5')
    expect(store.getState().selectedPost.info).toBe('hello, world!')

    store.dispatch(actions.requestPost(0))
    await Promise.resolve()
    expect(store.getState().error).toBe('게시글 정보를 받아오지 못했습니다.')
  })
})
