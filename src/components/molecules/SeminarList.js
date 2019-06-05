import React from 'react'
import { Card } from 'react-bootstrap'
import { SemiPreview } from '../atoms/SemiPreview'
import { historyPush } from '../../utils/Functions'
import './SeminarList.css'

export const SeminarList = ({semis, page, onSeminarClick}) => {
  const handleSeminarClick = (id) => {
    historyPush(`/seminar/${id}`)
  }
  let start, end

  start = (page-1)*3
  end = start+3 < semis.length ? (start+3) : (semis.length)
  return (
    <Card className="seminarList border-0">
      {semis.slice(start, end).map((semi) => (
        <SemiPreview key={semi.id} {...semi} onClick={()=>{handleSeminarClick(semi.id)}} />
      ))}
    </Card>
  )
}
