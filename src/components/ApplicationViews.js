import React, { useState } from "react";
import { Route, } from "react-router-dom"
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
import { EmployeeForm } from "./employee/EmployeeForm"
import { Redirect }from "react-router-dom"
import {Login} from "../components/auth/Login"
import {Register} from "../components/auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm"
import { CustomerEditForm } from "./customer/CustomerEditForm"
import { EmployeeEditForm } from "./employee/EmployeeEditForm"

export const ApplicationViews = ({isAuthenticated, setAuthUser}) => {
    return (
        <>
            {/* Render the animal list when http://localhost:3000/animals */}
            {/* Make sure you add the `exact` attribute here */}
            <Route exact path="/animals">
                {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
            </Route>

            <Route path="/login">
                <Login setAuthUser={setAuthUser}/>
            </Route>

            <Route path="/register">
                <Register setAuthUser={setAuthUser}/>
            </Route>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/*
            This is a new route to handle a URL with the following pattern:
            http://localhost:3000/animals/1

            It will not handle the following URL because the `(\d+)`
            matches only numbers after the final slash in the URL
            http://localhost:3000/animals/jack
            */}

            <Route exact path="/animals/:animalId(\d+)">
            <AnimalDetail />
            </Route>

            <Route exact path="/animals/:animalId(\d+)/edit">
             {isAuthenticated ? <AnimalEditForm /> : <Redirect to="/login" />}
            </Route>

            <Route path="/animals/create">
                <AnimalForm />
            </Route>

            <Route exact path="/customers">
                {isAuthenticated ?  <CustomerList /> : <Redirect to="/login"/>}
                
            </Route>

            <Route exact path="/customers/:customerId(\d+)">
            <CustomerDetail />
            </Route>

            
            <Route exact path="/customers/:customerId(\d+)/edit">
             {isAuthenticated ? <CustomerEditForm /> : <Redirect to="/login" />}
            </Route>

            <Route path="/customers/create">
                <CustomerForm />
            </Route>

            <Route exact path="/employees">
               {isAuthenticated ? <EmployeeList /> : <Redirect to="/login"/>}
                
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
                <EmployeeDetail />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

            <Route exact path="/employees/:employeeId(\d+)/edit">
                <EmployeeEditForm />
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