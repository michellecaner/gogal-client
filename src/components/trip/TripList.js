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

  return (
    <>
      <div className="create__trip__btn">
        <button
          onClick={() => {
            history.push({ pathname: `/trips/create` })
          }}
        >create new trip</button>
      </div>
      <div className="container__cards">
        {trips.map(trip => <TripCard
          key={trip.id}
          trip={trip} />)}
      </div>
    </>
  );
}