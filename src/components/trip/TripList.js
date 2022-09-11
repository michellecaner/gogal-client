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

// The useEffect hook accepts two parameters: a function and an array. The function parameter is where you place the code that interacts with an external resource. The array parameter is used to control when the function parameter is executed.

// The function argument to useEffect tells React to call the getTrips() function (that will fetch data from our API). The empty array argument tells React to call the function on the first render of the component.

  useEffect(() => {
    getTrips();
  }, [])

  return (
    <div className="container-cards">
      {trips.map(trip => <TripCard key={trip.id} />)}    
    </div>
  );
}