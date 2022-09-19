import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { TripCard } from "./TripCard"
import { getAllTrips, getTripById } from "./TripManager"

export const TripList = () => {
  // The initial state is an empty array
  const [trips, setTrips] = useState([])
  const history = useHistory()

  const getTrips = () => {
    // After the data comes back from the API, we
    //  use the setTrips function to update state
    return getAllTrips().then(data => {
      setTrips(data)
    })
  }

  useEffect(() => {
    getTrips();
  }, [])

  // Finally we use .map() to "loop over" the trips array to show a list of animal cards

  return (
    <div className="container__cards">
      
      <button className="btn"
        onClick={() => {
          history.push({ pathname: `/trips/create` })
        }}
      >Create New Trip</button>

      {trips.map(trip => <TripCard
        key={trip.id}
        trip={trip} />)}
    </div>
  );
}