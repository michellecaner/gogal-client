import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { TripList } from "./trip/TripList"
import { TripDetail } from "./trip/TripDetail"
import { TripForm } from "./trip/TripForm"
import { CategoryList } from "./category/CategoryList"
import { TipList } from "./tip/TipList"
import { TagList } from "./tag/TagList"

export const ApplicationViews = () => {
  return <>
      <main>
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
           <Route exact path="/trips/edit/:tripId(\d+)">
              <TripForm/>
           </Route>
           <Route exact path="/categories">
              <CategoryList />
           </Route>
           <Route exact path="/traveltips">
              <TipList />
           </Route>
           <Route exact path="/tags">
               <TagList />
           </Route>
      </main>
  </>
}