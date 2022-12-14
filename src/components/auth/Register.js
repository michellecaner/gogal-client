import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"

export const Register = () => {
    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()
    const username = useRef()
    const bio = useRef()
    const profileImgUrl = useRef()
    const password = useRef()
    const verifyPassword = useRef()
    const passwordDialog = useRef()
    const history = useHistory()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": username.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "email": email.current.value,
                "bio": bio.current.value,
                "profile_img_url": profileImgUrl.current.value,
                "password": password.current.value
            }

            return fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("gg_token", res.token)
                        history.push("/")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <div className="register__form__section">
                <div className="reg__form__wo__btn">
                    <form className="form--login" onSubmit={handleRegister}>
                        <div className="register__title">register an account</div>
                        <fieldset>
                            <label htmlFor="firstName"> First Name </label>
                            <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="lastName"> Last Name </label>
                            <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="inputEmail"> Email </label>
                            <input ref={email} type="text" name="email" className="form-control" placeholder="Email" required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="inputUsername">Username</label>
                            <input ref={username} type="text" name="username" className="form-control" placeholder="Username" required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="inputPassword"> Password </label>
                            <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="verifyPassword"> Verify Password </label>
                            <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="inputBio"> Input Bio </label>
                            <textarea ref={bio} name="bio" className="form-control" placeholder="Let other Go Gals know a little bit about you..." />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="inputImage"> Input Profile Image </label>
                            <textarea ref={profileImgUrl} name="profileImgUrl" className="form-control" placeholder="Link to profile photo" />
                        </fieldset>
                        <fieldset className="reg__btn__container"
                            style={{
                                textAlign: "center"
                            }}>
                            <button className="reg__btn" type="submit">register</button>
                        </fieldset>
                    </form>
                </div>
                <div className="reg__link__container">
                    <section className="link--register">
                        Already registered? <Link to="/login">Login</Link>
                    </section>
                </div>
            </div>
        </main>
    )
}
