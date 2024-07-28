import React from 'react'
import { json, redirect, useRouteLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem';

const EventDetail = () => {

  const data = useRouteLoaderData('event-details');

  const event = data.event;

  return <EventItem event={event} />;
}

export default EventDetail

export async function loader({ request, params}){
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/"+id);
  if (!response.ok) {
    return json({ message: "Could not fetch details for seleted event" }, { status: 500 });
  } else {
    return response;
  }

}

export async function action({params, request}){
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/"+eventId, {
    method: request.method,
  });
  if (!response.ok) {
    return json({ message: "Could not delete the seleted event" }, { status: 500 });
  } 
  return redirect('/events')
}