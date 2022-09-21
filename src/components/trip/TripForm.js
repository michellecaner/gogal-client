import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createTrip, getTripById, updateTrip } from './TripManager';
import { getCategories } from '../category/CategoryManager';
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
    categories: [],
    tags: []
  })

  const [categories, setCategories] = useState([])
  const [checkedCategories, setCheckedCategories] = useState([])

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory()
  const { tripId } = useParams()

  useEffect(() => {
    getCategories().then(setCategories)

    console.log("this is the trip id", tripId)

    if (tripId) {
      getTripById(parseInt(tripId))
        .then(updatedTrip => {
          setCurrentTrip({
            id: tripId,
            title: updatedTrip.title,
            image_url_one: updatedTrip.image_url_one,
            image_url_two: updatedTrip.image_url_two,
            image_url_three: updatedTrip.image_url_three,
            country: updatedTrip.country,
            city: updatedTrip.city,
            from_date: updatedTrip.from_date,
            to_date: updatedTrip.to_date,
            content: updatedTrip.content,
            categories: updatedTrip.categories
          })
          const tripCategories = updatedTrip.categories.map(category => parseInt(category.id))
          setCheckedCategories(tripCategories)
          console.log(updatedTrip)
        })
    }
  }, [])

  useEffect(() => {
    const updatedTrip = { ...currentTrip }
    updatedTrip.categories = checkedCategories
    setCurrentTrip(updatedTrip)
  }, [checkedCategories])

  const changeTripState = (domEvent) => {
    console.log("you triggered change state")

    const newTrip = { ...currentTrip }
    if (domEvent.target.name.includes("category")) {
      const currentCategories = [...checkedCategories]
      if (domEvent.target.checked) {
        currentCategories.push(parseInt(domEvent.target.value))
      } else {
        const index = currentCategories.indexOf(parseInt(domEvent.target.value))
        currentCategories.splice(index, 1)
      }

      setCheckedCategories(currentCategories)
    }

    let selectedVal = domEvent.target.value
    if (domEvent.target.id.includes("Id")) {
      selectedVal = parseInt(selectedVal)
    }
    newTrip[domEvent.target.name] = selectedVal
    setCurrentTrip(newTrip)
    console.log(newTrip)
  }

  const handleClickSaveTrip = (event) => {
    event.preventDefault()

    if (currentTrip.title === "") {
      window.alert("Please enter a trip title!")
    } else if (tripId) {
      updateTrip(currentTrip)
        .then(() => history.push("/trips"))
    } else {
      createTrip(currentTrip)
        .then(() => { history.push("/trips") })
    }
  }

  return (
    <form className="trip__form">
      <div className="trip__form__title">{tripId ? "edit trip" : "create new trip"}</div>
      <div className="form__fields">
        <fieldset>
          <div className="form-group">
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" required autoFocus className="form-control"
              defaultValue={currentTrip.title}
              onChange={changeTripState}
            />
          </div>
        </fieldset>
        <div className="form__images">
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
              <label htmlFor="image_url_three">Image URL #3: </label>
              <input type="text" name="image_url_three" required autoFocus className="form-control"
                value={currentTrip.image_url_three}
                onChange={changeTripState}
              />
            </div>
          </fieldset>
        </div>
        <div className="form__location">
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
        </div>
        <div className="form__dates">
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
        </div>
        <fieldset>
          <div className="form-group">
            <label htmlFor="content">Notes: </label>
            <textarea rows="10" cols="125" name="content" required autoFocus className="content__box"
              value={currentTrip.content}
              onChange={changeTripState}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="categories">Categories: </label>
            {
              categories.map(c => {
                return <div key={c.id} className="categoryCheckbox">
                  <input type="checkbox"
                    name={`category ${c.id}`}
                    value={c.id}
                    checked={checkedCategories.includes(c.id)}
                    onChange={changeTripState}
                  ></input>
                  <label htmlFor={c.id}> {c.label}</label>
                </div>
              })
            }
          </div>
        </fieldset>
        <div className="trip__form__btn">
        <button className="save__trip__btn" type="submit"
          onClick={handleClickSaveTrip}>
          {tripId ? "submit changes" : "create trip"}
        </button>
        </div>
      </div>
    </form>
  )

}

