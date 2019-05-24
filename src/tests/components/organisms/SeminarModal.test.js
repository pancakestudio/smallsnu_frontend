import React from 'react'
import { Provider } from 'react-redux'
import { SeminarModal } from '../../../components/organisms/SeminarModal'
import ConnectedSeminarModal from '../../../containers/SeminarModal'
import configureStore from 'redux-mock-store'
import { shallow, mount } from 'enzyme'
import reducers from '../../../store/reducers'
import { createStore } from 'redux'
import * as actions from '../../../store/actions'

const semi = {
  "id": 5,
  "title": "[Seminar] Enabling Scalable Learning on Massive Datasets",
  "talker": "Praveen R. RaoComputer Science & Electrical Engineering School of Computing and Engineering, University of Missouri-Kansas City",
  "where": "301동 306호",
  "time": "2019년 4월 12일 금요일 AM 11:00 - 2019년 4월 12일 금요일 PM 12:00",
  "link": "https://cse.snu.ac.kr/node/37069"
}

describe('SeminarModal', ()=>{
  let component
  const show = true 

  it('renders correctly', ()=>{
    component = shallow(<SeminarModal semi={semi} show={show} />)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })
})

describe('ConnectedSeminarModal', ()=>{
  const initialState = {
    selectedSemi: semi, 
  }
  const mockStore = configureStore()
  let store, component

  it('renders correctly', ()=>{
    store = mockStore(initialState)
    component = mount(<Provider store={store}><ConnectedSeminarModal/></Provider>)
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has a modal', ()=>{
    expect(component.find('Bootstrap(Modal)').exists()).toBe(true)
  })
})
