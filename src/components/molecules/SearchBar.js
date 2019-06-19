import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { getBldgCoord, getKeyword } from '../../utils/Functions'
import './SearchBar.css'

export const SearchBar = ({onSearchBuilding, onSearchRestaurant, onSearchSeminar, onSearchATM, onSearchCafe, onSearchBank, onSearchConv, sendQuery}) => {
  let input
  const handleChange = (e) => {
    input = e.target.value
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let bldgNo = input
    if(bldgNo.slice(-1)==="동"){
      bldgNo = bldgNo.slice(0, -1)
    }
    const bldgPos = getBldgCoord(bldgNo)
    if(bldgPos !== undefined){
      onSearchBuilding(bldgNo, bldgPos)
    }
    else if(getKeyword(input, "restaurant")==="restaurant"){
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
  }

  return (
    <Form className="searchBar pull-right" inline onSubmit={handleSubmit}>
      <FormControl
        onChange = {handleChange}
        type="text"
        placeholder="검색(건물, 편의 시설 등)"
        className="search mr-sm-2"
      />
      <Button className="submitButton" variant="outline-secondary" type="submit">검색</Button>
    </Form>
  )
}
