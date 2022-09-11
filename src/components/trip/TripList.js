import React, { useEffect, useState } from "react";
import { TripCard } from "./TripCard"
import { getAllTrips, getTripById } from "./TripManager"

export const TripList = () => {
  // The initial state is an empty array
  const [trips, setTrips] = useState([])

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
    <div className="container-cards">
      {trips.map(trip => <TripCard 
        key={trip.id} 
        trip={trip}/>)}    
    </div>
  );
}