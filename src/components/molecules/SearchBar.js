import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { getBldgCoord } from '../../utils/Functions'
import './SearchBar.css'

export const SearchBar = ({onSearchValueChange, onSearch}) => {
  let input
  const handleChange = (e) => {
    onSearchValueChange(e.target.value.trim())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const bldgNo = input.value
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
        ref = {(ref)=>{input=ref}}
        onChange = {handleChange}
        type="text"
        placeholder="건물 번호"
        className="mr-sm-2"
      />
      <Button className="submitButton" variant="outline-secondary" type="submit">검색</Button>
    </Form>
  )
}
