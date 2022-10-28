import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createTrip, getTripById, updateTrip } from './TripManager';
import { getCategories } from '../category/CategoryManager';
import { getTags } from '../tag/TagManager';
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

  const [tags, setTags] = useState([])
  const [checkedTags, setCheckedTags] = useState([])

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory()
  const { tripId } = useParams()

  useEffect(() => {
    getCategories().then(setCategories)
    getTags().then(setTags)

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
            categories: updatedTrip.categories,
            tags: updatedTrip.tags
          })

          const tripCategories = updatedTrip.categories.map(category => parseInt(category.id))
          setCheckedCategories(tripCategories)

          const tripTags = updatedTrip.tags.map(tag => parseInt(tag.id))
          setCheckedTags(tripTags)
          console.log(updatedTrip)
        })
    }
  }, [])

  useEffect(() => {
    const updatedTrip = { ...currentTrip }
    updatedTrip.categories = checkedCategories
    setCurrentTrip(updatedTrip)
  }, [checkedCategories])

  useEffect(() => {
    const updatedTrip = { ...currentTrip }
    updatedTrip.tags = checkedTags
    setCurrentTrip(updatedTrip)
  }, [checkedTags])

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

    if (domEvent.target.name.includes("tag")) {
      const currentTags = [...checkedTags]
      if (domEvent.target.checked) {
        currentTags.push(parseInt(domEvent.target.value))
      } else {
        const index = currentTags.indexOf(parseInt(domEvent.target.value))
        currentTags.splice(index, 1)
      }

      setCheckedTags(currentTags)
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
            <label htmlFor="title"><b>Title: </b></label>
            <input type="text" name="title" required autoFocus className="form-control"
              defaultValue={currentTrip.title}
              onChange={changeTripState}
            />
          </div>
        </fieldset>
        <div className="form__images">
          <fieldset>
            <div className="form-group">
              <label htmlFor="image_url_one"><b>Image URL #1: </b></label>
              <input type="text" name="image_url_one" required autoFocus className="form-control"
                value={currentTrip.image_url_one}
                onChange={changeTripState}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="image_url_two"><b>Image URL #2: </b></label>
              <input type="text" name="image_url_two" required autoFocus className="form-control"
                value={currentTrip.image_url_two}
                onChange={changeTripState}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="image_url_three"><b>Image URL #3: </b></label>
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
              <label htmlFor="country"><b>Country: </b></label>
              <input type="text" name="country" required autoFocus className="form-control"
                value={currentTrip.country}
                onChange={changeTripState}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="city"><b>City: </b></label>
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
              <label htmlFor="from_date"><b>From Date: </b></label>
              <input type="date" name="from_date" required autoFocus className="form-control"
                value={currentTrip.from_date}
                onChange={changeTripState}
              />
            </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
              <label htmlFor="to_date"><b>To Date: </b></label>
              <input type="date" name="to_date" required autoFocus className="form-control"
                value={currentTrip.to_date}
                onChange={changeTripState}
              />
            </div>
          </fieldset>
        </div>
        <fieldset>
          <div className="form-group">
            <label htmlFor="content"><b>Notes: </b></label>
            <textarea rows="10" cols="125" name="content" required autoFocus className="content__box"
              value={currentTrip.content}
              onChange={changeTripState}
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="categories"><b>Categories: </b></label>
            {
              categories.map(c => {
                return <div key={c.id} className="categoryCheckbox">
                  <input type="checkbox"
                    className="checkbox"
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
        <fieldset>
          <div className="form-group">
            <label htmlFor="tags"><b>Tags: </b></label>
            {
              tags.map(t => {
                return <div key={t.id} className="tagCheckbox">
                  <input type="checkbox"
                    className="checkbox"
                    name={`tag ${t.id}`}
                    value={t.id}
                    checked={checkedTags.includes(t.id)}
                    onChange={changeTripState}
                  ></input>
                  <label htmlFor={t.id}> {t.label}</label>
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

