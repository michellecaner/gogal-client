import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {

    const history = useHistory()

    return (
        <nav className="navbar">
            <div className="navbar__title">
                <li>
                    <Link className="navbar__link" to="/">go gal!</Link>
                </li>
            </div>
            <ul className="navbar__menu">
                <a href="#" className="toggle__button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/traveltips">travel tips</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/trips">my trips</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/categories">categories</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/mygogals">my go gals</Link>
                </li>
                {
                    (localStorage.getItem("gg_token") !== null) ?
                        <li className="navbar__item">
                            <Link className="navbar__link fakeLink"
                                onClick={() => {
                                    localStorage.removeItem("gg_token")
                                    history.push({ pathname: "/" })
                                }}
                            >log out</Link>
                        </li> :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>
            }
            </ul>
        </nav>
    )
}