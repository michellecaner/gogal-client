import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createTrip } from './TripManager';
import "./TripForm.css"

export const TripForm = () => {
  // State will contain both trip data as well as an isLoading flag.
  // Define the initial state of the form inputs with useState()
  const [currentTrip, setCurrentTrip] = useState({
    title: "",
    image_url_one: "",
    image_url_two: "",
    image_url_three: "",
    country: "",
    city: "",
    from_date: "",
    to_date: "",
    content: ""
    // categories: "", 
    // tags: ""
  })

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory()

  const changeTripState = (domEvent) => {
    const newTrip = { ...currentTrip }
    let selectedVal = domEvent.target.value
    if (domEvent.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal)
    }
    newTrip[domEvent.target.name] = selectedVal
    setCurrentTrip(newTrip)
    console.log("you hit your change state")
  }

  return (
    <form className="tripForm">
      <h2 className="tripForm__title">Create New Trip</h2>
      <fieldset>

      </fieldset>
    </form>
  )

}