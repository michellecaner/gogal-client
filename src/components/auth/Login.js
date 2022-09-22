import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"

export const Login = () => {
    const username = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const history = useHistory()

    const handleLogin = (e) => {
      e.preventDefault()

      return fetch("http://127.0.0.1:8000/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          body: JSON.stringify({
              username: username.current.value,
              password: password.current.value
          })
      })
          .then(res => res.json())
          .then(res => {
              if ("valid" in res && res.valid && "token" in res) {
                  localStorage.setItem("gg_token", res.token)
                  history.push("/")
              }
              else {
                  invalidDialog.current.showModal()
              }
          })
    }

    return (
      <main className="container--login">
          <dialog className="dialog dialog--auth" ref={invalidDialog}>
              <div>Username or password was not valid.</div>
              <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
          </dialog>
          <section className="login__form__section">
              <form className="form--login" onSubmit={handleLogin}>
                <div className="login__title">
                  <div className="gogal__title">go gal!</div>
                  <p>please sign in</p>
                  </div>
                  <fieldset className="user__name">
                      <label htmlFor="inputUsername"> Username: </label>
                      <input ref={username} type="username" id="username" className="form-control" placeholder="Enter username..." required autoFocus />
                  </fieldset>
                  <fieldset>
                      <label htmlFor="inputPassword"> Password: </label>
                      <input ref={password} type="password" id="password" className="form-control" placeholder="Enter password..." required />
                  </fieldset>
                  <fieldset className="sign__in__btn__container" 
                    style={{
                      textAlign: "center"
                  }}>
                      <button className="sign__in__btn" type="submit">sign in</button>
                  </fieldset>
                  
              </form>
          </section>
          <section className="link--register">
              <Link to="/register">Not a member yet?</Link>
          </section>
      </main>
  )
}
