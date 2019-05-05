import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { getBldgCoord } from '../../utils/Functions'
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
    else if(input.value === "restaurant" || input.value === "restaurants"
    || input.value === "식당" || input.value === "쿰척"){
      onSearchRestaurant()
    }
    else {
      alert("해당 번호를 가진 건물이 없습니다.")
    }
  }

  return (
    <Form className="searchBar pull-right" inline onSubmit={handleSubmit}>
      <FormControl
        ref = {(ref)=>{input=ref}}
        onChange = {handleChange}
        type="text"
        placeholder="건물 번호"
        className="mr-sm-2"
      />
      <Button variant="outline-secondary" type="submit">검색</Button>
    </Form>
  )
}
