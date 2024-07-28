import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetail = () => {

    const params = useParams();

  return (
    <>
        <h1>Event Details</h1>
        <p> Event id {params.eventId}</p>
    </>
  )
}

export default EventDetail