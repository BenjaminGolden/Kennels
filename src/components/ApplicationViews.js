import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
                <h2>Animals:</h2>
              <AnimalList />
            </Route>
        
            <Route path="/customers">
                <h2>Customer:</h2>
                <CustomerList />
            </Route>

            <Route path="/employees">
                <h2>Employee:</h2>
                <EmployeeList />
            </Route>

            <Route path="/locations">
                <h2>Locations:</h2>
                <LocationList />
            </Route>
        
        </>

    )
}