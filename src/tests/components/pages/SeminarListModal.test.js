import React from 'react'
import { Provider } from 'react-redux'
import { SeminarListModal } from '../../../components/pages/SeminarListModal'
import ConnectedSeminarListModal from '../../../containers/SeminarListModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'
import * as actions from '../../../store/actions'

const seminars = [
  {
    "id": 1,
    "title": "[Seminar] Autonomous Driving: Simulation and Navigation",
    "talker": "Dinesh ManochaDepartment of Computer Science and Electrical & Computer Engineering, University of Maryland at College Park",
    "where": "302동 309-1호",
    "time": "2019년 3월 28일 목요일 PM 1:30 - 2019년 3월 28일 목요일 PM 2:30",
    "link": "https://cse.snu.ac.kr/node/36950"
  },
  {
    "id": 2,
    "title": "[Seminar] Augmented Virtuality with 360 Videos",
     "talker": "Taehyun Rhee교수Victoria University of Welington",
     "where": "302동 308호",
     "time": "2019년 3월 22일 금요일 PM 1:30 - 2019년 3월 22일 금요일 PM 2:45",
     "link": "https://cse.snu.ac.kr/node/36887"
  },
  {
    "id": 11,
    "title": "[Seminar] SCAI AI Lunch Talk #1 - Deep Learning @ Naver/Line",
    "talker": "김성훈리더NAVER Clova AI ",
    "where": "302동 105호",
    "time": "2019년 3월 21일 목요일 PM 12:30 - 2019년 3월 21일 목요일 PM 1:30",
    "link": "https://cse.snu.ac.kr/node/36870"
  },
  {
    "id": 12,
    "title": "[Seminar] Scalable and Automatic Vulnerability Discovery Beyond Random Testing",
    "talker": "윤인수 (Insu Yun)Ph.D. student Georgia Institute of Technology",
    "where": "302-409",
    "time": "2019년 3월 11일 월요일 AM 10:30 - 2019년 3월 11일 월요일 PM 12:00",
    "link": "https://cse.snu.ac.kr/node/35622"
  },
]

describe('SeminarListModal', ()=>{
  global.window = { location: { pathname: null } };
  let component
  const activePage = 1
  const mockPaginationClick = jest.fn()

  it('renders correctly', ()=>{
    component = shallow(
      <SeminarListModal 
        bldgNo={'302'}
        semis={seminars}
        activePage={activePage}
        show={true}
        onPaginationClick={mockPaginationClick}
      />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('has a proper pagination', ()=>{
    expect(component.find('Bootstrap(Pagination)').exists()).toBe(true)
    expect(component.find('PageItem').length).toBe(2)
  })

  it('calls functions', ()=>{
    component.find('PageItem').at(1).simulate('click')
    expect(mockPaginationClick.mock.calls.length).toBe(1)
    component.find('Prev').simulate('click')
    expect(mockPaginationClick.mock.calls.length).toBe(2)
    component.find('Next').simulate('click')
    expect(mockPaginationClick.mock.calls.length).toBe(3)
    component.setProps({activePage: 2})
    component.find('Prev').simulate('click')
    expect(mockPaginationClick.mock.calls.length).toBe(4)
    component.find('Next').simulate('click')
    expect(mockPaginationClick.mock.calls.length).toBe(5)
    component.find('Bootstrap(Modal)').simulate('hide')
    expect(global.window.location.pathname).toEqual('/')
    component.find('.back').simulate('click')
    expect(global.window.location.pathname).toEqual('/building/302')
  })

  it('handles undefined data correctly', ()=>{
    component.setProps({semis: undefined})
    expect(component.find('ModalSpinner').exists()).toBe(true)
  })
})

describe('ConnectedSeminarListModal', ()=>{
  const initialState = {
    selectedSemiList: seminars, 
    activeSemiPage: 1,
  }
  const mockStore = configureStore()
  let store, component

  it('renders correctly', ()=>{
    store = mockStore(initialState)
    component = mount(<Provider store={store}><ConnectedSeminarListModal/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })

  it('has a proper pagination', ()=>{
    expect(component.find('Bootstrap(Pagination)').exists()).toBe(true)
    expect(component.find('PageItem').length).toBe(4) // Including next and prev
  })

  it('dispatches changeSeminarPage action', ()=>{
    component.find('PageItem').at(2).prop('onClick')()
    expect(store.getActions()[0]).toEqual(actions.changeSeminarPage(2))
  })

  it('reducers', ()=>{
    store = createStore(reducers, initialState)

    store.dispatch(actions.changeSeminarPage(2))
    expect(store.getState().activeSemiPage).toBe(2)
  })
})
