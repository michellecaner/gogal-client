import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {

    const history = useHistory()

    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navbar">
            <div className="navbar__title">
                <li>
                    <Link className="navbar__link" to="/">go gal!</Link>
                </li>
            </div>
            <button className="hamburger"
                onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div className={
                isNavExpanded ? "navigation__menu expanded" : "navigation__menu"
            }
            >
                <ul className="navbar__menu">
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
                                <li className="nav__item">
                                    <Link className="nav__link" to="/login">Login</Link>
                                </li>
                                <li className="nav__item">
                                    <Link className="nav__link" to="/register">Register</Link>
                                </li>
                            </>
                    }
                </ul>
            </div>
        </nav>
    )
}
