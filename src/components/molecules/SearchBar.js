import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { getBldgCoord, getKeyword } from '../../utils/Functions'
import './SearchBar.css'

export const SearchBar = ({onSearchValueChange, onSearchBuilding, onSearchRestaurant}) => {
  let input
  const handleChange = (e) => {
    onSearchValueChange(e.target.value.trim())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const bldgNo = input.value
    const bldgPos = getBldgCoord(bldgNo)
    if(bldgPos !== undefined){
      onSearchBuilding(bldgNo, bldgPos)
    }
    else if(getKeyword(input.value, "restaurant")){
      onSearchRestaurant()
    }
    else {
      alert("잘못된 검색어 형식입니다.")
    }
  }

  return (
    <Form className="searchBar pull-right" inline onSubmit={handleSubmit}>
      <FormControl
        ref = {(ref)=>{input=ref}}
        onChange = {handleChange}
        type="text"
        placeholder="건물 번호 / 식당"
        className="mr-sm-2"
      />
      <Button className="submitButton" variant="outline-secondary" type="submit">검색</Button>
    </Form>
  )
}
