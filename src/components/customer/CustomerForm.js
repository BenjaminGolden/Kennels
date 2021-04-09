import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addCustomer, getAllCustomers } from '../../modules/CustomerManager';
import './CustomerForm.css'
import { getAllLocations } from "../../modules/LocationManager";
import {getAllAnimals } from "../../modules/AnimalManager";

export const CustomerForm = () => {

    const [customer, setCustomer] = useState({
        name: "",
        phoneNumber: "",
        email: ""
        
    });

    const [isLoading, setIsLoading] = useState(false);

    const [locations, setLocations] = useState([]);
    const [animals, setAnimals] = useState([]);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newCustomer = {...customer}
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newCustomer[event.target.id] = selectedVal
        setCustomer(newCustomer)
    }

    useEffect(() => {
        getAllLocations()
        .then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    }, []);

    useEffect(() => {
    getAllAnimals()
    .then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  }, []);

  const handleClickSaveCustomer = (event) => {
      event.preventDefault()
          addCustomer(customer)
            .then(() => history.push("/customers"))
      } 
  

  return (
    <form className="customerForm">
    <h2 className="customerForm__title">New customer</h2>
    <fieldset>
        <div className="form-group">
            <label htmlFor="name">Customer name: </label>
            <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="customer name" value={customer.name} />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="breed">customer address: </label>
            <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="customer address" value={customer.address} />
        </div>
    </fieldset>
    <fieldset>
        <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input type="text" id="phoneNumber" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="phone number" value={customer.phoneNumber} />
        </div>
    </fieldset>

    <fieldset>
				<div className="form-group">
					<label htmlFor="email">Customer email: </label>
					<input type="text" id="email" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="email" value={customer.email} />
				</div>
			</fieldset>

    <button className="btn btn-primary"
        onClick={handleClickSaveCustomer}>
        Save customer
  </button>
</form>
  )
}