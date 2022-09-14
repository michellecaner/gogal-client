import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { TripList } from "./trip/TripList"
import { TripDetail } from "./trip/TripDetail"
import { TripForm } from "./trip/TripForm"
import { CategoryList } from "./category/CategoryList"

export const ApplicationViews = () => {
  return <>
      <main style={{
          margin: "5rem 2rem",
          lineHeight: "1.75rem"
      }}>
           <Route exact path={["/"]}>
              <Home />
           </Route>
           <Route exact path="/trips">
              <TripList />
           </Route>
           <Route exact path="/trips/create">
              <TripForm />
           </Route>
           <Route exact path="/trips/:tripId(\d+)">
              <TripDetail/>
           </Route>
           <Route exact path="/categories">
              <CategoryList />
           </Route>
      </main>
  </>
}