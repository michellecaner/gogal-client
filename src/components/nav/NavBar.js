import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Go Gal!</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/traveltips">Travel Tips</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/trips">My Trips</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/categories">Categories</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/mygogals">My Go Gals</Link>
            </li>
        </ul>
    )
}
