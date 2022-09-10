import React from "react"
import { Link } from "react-router-dom"
import "./Trip.css"

export const TripCard = ({ trip }) => {
  return (
    <div className="card">
    <div className="card-content">
      <h3><span className="trip-title">{trip.title}
      </span></h3>
      <Link to={`/trips/${trip.id}`}>
        <button type="button" className="lets-go-btn">Let's Go!</button>
      </Link>
      {/* <button type="button" className="delete-btn" onClick={() => handleDeleteProject(trip.id)}>Delete</button> */}
    </div>
</div>  
  )
}