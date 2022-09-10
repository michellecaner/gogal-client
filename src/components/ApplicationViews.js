import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { TripCard } from "./trip/TripCard"

export const ApplicationViews = () => {
  return <>
      <main style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem"
      }}>
           <Route exact path={["/"]}>
              <Home />
           </Route>
           <Route exact path={["/trips"]}>
              <TripCard />
           </Route>
         
      </main>
  </>
}