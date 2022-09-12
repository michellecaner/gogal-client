import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { TripList } from "./trip/TripList"
import { TripDetail } from "./trip/TripDetail"
import { TripForm } from "./trip/TripForm"

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
              <TripList />
           </Route>
           <Route exact path={["/trips/:tripId"]}>
              <TripDetail/>
           </Route>
           <Route exact path={["/trips/create"]}>
              <TripForm />
           </Route>
      </main>
  </>
}