import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getTripById, deleteTrip, getAllTrips } from "./TripManager";
import "./TripDetail.css"

export const TripDetail = () => {
  const [trip, setTrip] = useState({ title: "", image_url_one: "", image_url_two: "", image_url_three: "", country: "", city: "", from_date: "", to_date: "", content: "", categories: [], tags: [] })
  const [isLoading, setIsLoading] = useState(true);

  const { tripId } = useParams()
  const history = useHistory()

  useEffect(() => {
    getTripById(tripId).then(trip => {
      setTrip(trip)
      setIsLoading(false)
    })
  }, [tripId])

  const handleDeleteTrip = () => {
    setIsLoading(true)
    deleteTrip(trip.id).then(() => {
      history.push("/trips");
    });
  };

  return (
    <div className="trip-details-container">
      <div className="trip-img-wrapper">
        <img className="trip-img" src={trip.image_url_one} />
        <img className="trip-img" src={trip.image_url_two} />
        <img className="trip-img" src={trip.image_url_three} />
      </div>
      <h3 className="trip-title">{trip.title}</h3>
      <div className="trip-details">
        <p className="trip-country">Country: {trip.country}</p>
        <p className="trip-city">City: {trip.city}</p>
        <p className="trip-from-date">From Date: {trip.from_date}</p>
        <p className="trip-to-date">To Date: {trip.to_date}</p>
        <p className="trip-content">Notes: {trip.content}</p>
        <p className="trip-categories">Categories: {trip.categories.map((data) => {
          return(data.label)
        })}</p>
        <p className="trip-tags">{trip.tags.label}</p>
      </div>
      <button type="button"
              onClick={() => {
                history.push(`/trips/edit/${trip.id}`)
              }}  
            >Edit</button>
      <button type="button" onClick={() => handleDeleteTrip(trip.id)}>
        Delete
      </button>
    </div>
  )
}
