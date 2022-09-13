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
    content: "",
    categories: [1, 4, 8], 
    tags: [7, 2, 6]
  })

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory()

  const changeTripState = (domEvent) => {
    console.log("you triggered change state")
    const newTrip = { ...currentTrip }
    let selectedVal = domEvent.target.value
    if (domEvent.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal)
    }
    newTrip[domEvent.target.name] = selectedVal
    setCurrentTrip(newTrip)
    console.log(newTrip)
  }

  return (
    <form className="tripForm">
      <h2 className="tripForm__title">Create New Trip</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" required autoFocus className="form-control"
            defaultValue={currentTrip.title}
            onChange={changeTripState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="image_url_one">Image URL #1: </label>
          <input type="text" name="image_url_one" required autoFocus className="form-control"
            value={currentTrip.image_url_one}
            onChange={changeTripState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="image_url_two">Image URL #2: </label>
          <input type="text" name="image_url_two" required autoFocus className="form-control"
            value={currentTrip.image_url_two}
            onChange={changeTripState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="image_url_three">Image URL #1: </label>
          <input type="text" name="image_url_three" required autoFocus className="form-control"
            value={currentTrip.image_url_three}
            onChange={changeTripState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="country">Country: </label>
          <input type="text" name="country" required autoFocus className="form-control"
            value={currentTrip.country}
            onChange={changeTripState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="city">City: </label>
          <input type="text" name="city" required autoFocus className="form-control"
            value={currentTrip.city}
            onChange={changeTripState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="from_date">From Date: </label>
          <input type="date" name="from_date" required autoFocus className="form-control"
            value={currentTrip.from_date}
            onChange={changeTripState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="to_date">To Date: </label>
          <input type="date" name="to_date" required autoFocus className="form-control"
            value={currentTrip.to_date}
            onChange={changeTripState}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="content">Content: </label>
          <textarea rows="10" name="content" required autoFocus className="form-control"
            value={currentTrip.content}
            onChange={changeTripState}
          />
        </div>
      </fieldset>
      <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    // This is where the front end connects to the back end via naming conventions
                    const trip = {
                        title: currentTrip.title,
                        image_url_one: currentTrip.image_url_one,
                        image_url_two: currentTrip.image_url_two,
                        image_url_three: currentTrip.image_url_three,
                        country: currentTrip.country,
                        city: currentTrip.city,
                        from_date: currentTrip.from_date,
                        to_date: currentTrip.to_date,
                        content: currentTrip.content
                    }

                    // Send POST request to your API
                    createTrip(trip)
                        .then(() => history.push("/trips"))
                }}
                className="btn btn-primary">Create</button>
    </form>
  )

}