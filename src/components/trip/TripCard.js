import React from "react"
import { Link } from "react-router-dom"
import "./Trip.css"

export const TripCard = ({ trip }) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__title">
          {trip.title}
        </div>
        <Link to={`/trips/${trip.id}`}>
          <button>Let's Go!</button>
        </Link>      
      </div>
    </div>
  )
}