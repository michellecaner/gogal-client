import React from "react"
import { Route } from "react-router-dom"
import { Register } from "./auth/Register"
import { Home } from "./Home"

export const ApplicationViews = () => {
  return <>
      <main style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem"
      }}>
           <Route exact path={["/"]}>
              <Home />
          </Route>
         
      </main>
  </>
}