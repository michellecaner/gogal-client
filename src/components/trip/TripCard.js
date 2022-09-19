import React from "react"
import { Link } from "react-router-dom"
import "./Trip.css"

export const TripCard = ({ trip }) => {
  return (
    <div className="card">
        <div className="trip__card__title">{trip.title}</div>
      <div className="card__content">
        <Link to={`/trips/${trip.id}`}>
          <button className="lets__go__btn">let's go!</button>
       </Link>
       </div>
    </div>
  )
}