import React from 'react'
import { SeminarList } from '../../../components/molecules/SeminarList'
import { shallow } from 'enzyme'

describe('SeminarList', ()=>{
  let component
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
  const page = 1
  const mockSeminarClick = jest.fn()

  it('renders correctly', ()=>{
    component = shallow(
      <SeminarList
        semis={seminars.slice(0, 2)}
        page={page}
      />
    )
  })

  it('matches snapshot', ()=>{
    expect(component).toMatchSnapshot()
  })

  it('has semipreviews', ()=>{
    expect(component.find('SemiPreview').exists()).toBe(true)
    expect(component.find('SemiPreview').length).toBe(2)
  })

  it('deals with a long seminar list', ()=>{
    component.setProps({semis: seminars})
    expect(component.find('SemiPreview').exists()).toBe(true)
    expect(component.find('SemiPreview').length).toBe(3)
  })

  it('calls functions', ()=>{
    component.find('SemiPreview').at(0).prop('onClick')()
    expect(global.window.location.pathname).toEqual('/seminar/1')
  })
})
