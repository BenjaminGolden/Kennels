import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { AnimalDetail } from "./animal/AnimalDetail";
import { CustomerDetail } from "./customer/CustomerDetail";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { LocationDetail } from "./location/LocationDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { CustomerForm } from "./customer/CustomerForm"



export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            {/* Make sure you add the `exact` attribute here */}
            <Route exact path="/animals">
            <AnimalList />
            </Route>

            <Route path="/animals/:animalId(\d+)">
            <AnimalDetail />
            </Route>

            {/*
            This is a new route to handle a URL with the following pattern:
            http://localhost:3000/animals/1

            It will not handle the following URL because the `(\d+)`
            matches only numbers after the final slash in the URL
            http://localhost:3000/animals/jack
            */}

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route exact path="/customers">
                <h2>Customer:</h2>
                <CustomerList />
            </Route>

            <Route path="/customers/:customerId(\d+)">
            <CustomerDetail />
            </Route>

            <Route path="/customers/create">
                <CustomerForm />
            </Route>

            <Route exact path="/employees">
                <h2>Employee:</h2>
                <EmployeeList />
            </Route>

            <Route path="/employees/:employeeId(\d+)">
                <EmployeeDetail />
            </Route>

            <Route exact path="/locations">
                <h2>Locations:</h2>
                <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)">
                <LocationDetail />
            </Route>

        
        </>

    )
}