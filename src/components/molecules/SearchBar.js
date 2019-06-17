import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { getBldgCoord, getKeyword } from '../../utils/Functions'
import './SearchBar.css'

export const SearchBar = ({onlyBldg, onSearchBuilding, onSearchRestaurant, onSearchSeminar, onSearchATM, onSearchCafe, onSearchBank, onSearchConv, sendQuery}) => {
  let input, placeholder
  const handleChange = (e) => {
    input = e.target.value
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const bldgNo = input
    const bldgPos = getBldgCoord(bldgNo)
    if(!onlyBldg){
      if(getKeyword(input, "restaurant")==="restaurant"){
        onSearchRestaurant()
      }
      else if(getKeyword(input, "seminar")==="seminar"){
        onSearchSeminar()
      }
      else if(getKeyword(input, "atm")==="atm"){
        onSearchATM()
      }
      else if(getKeyword(input, "bank")==="bank"){
        onSearchBank()
      }
      else if(getKeyword(input, "cafe")==="cafe"){
        onSearchCafe()
      }
      else if(getKeyword(input, "conv")==="conv"){
        onSearchConv()
      }
      else {
        sendQuery(input)
      }
    } else {
      alert("해당 건물번호를 가진 건물이 없습니다.")
    }
  }
  if(onlyBldg){
    placeholder = "건물 번호"
  } else {
    placeholder = "검색(건물, 편의 시설 등)"
  }

  return (
    <Form className="searchBar pull-right" inline onSubmit={handleSubmit}>
      <FormControl
        onChange = {handleChange}
        type="text"
        placeholder={placeholder}
        className="search mr-sm-2"
      />
      <Button className="submitButton" variant="outline-secondary" type="submit">검색</Button>
    </Form>
  )
}
