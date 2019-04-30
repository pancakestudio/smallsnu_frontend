import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { getBldgCoord } from '../../utils/Functions'
import './SearchBar.css'

export const SearchBar = ({bldgNo, onSearchValueChange, onSearch}) => {
  const handleChange = (e) => {
    onSearchValueChange(e.target.value.trim())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const bldgPos = getBldgCoord(bldgNo)
    if(bldgPos !== undefined){
      onSearch(bldgNo, bldgPos)
    } else {
      alert("해당 번호를 가진 건물이 없습니다.")
    }
  }

  return (
    <Form className="searchBar pull-right" inline onSubmit={handleSubmit}>
      <FormControl
        onChange = {handleChange}
        type="text"
        placeholder="건물 번호"
        className="mr-sm-2"
      />
      <Button variant="outline-secondary" type="submit">검색</Button>
    </Form>
  )
}
