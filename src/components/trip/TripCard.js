import React from "react"
import { Link } from "react-router-dom"
import "./Trip.css"

export const TripCard = ({trip}) => {

  return(
<section className="trip">
    <h3 className="trip__title">Turkey 2019</h3>
    <button>Let's Go!</button>
  </section>
  )
  
}