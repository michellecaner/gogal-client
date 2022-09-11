import React from "react"
import { Link } from "react-router-dom"
import "./Trip.css"

export const TripCard = ({ trip }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3><span className="card-trip-title">
          {trip.title}
        </span></h3>
        <button>Let's Go!</button>
      </div>
    </div>
  );
}