import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addCustomer, getAllCustomers } from '../../modules/CustomerManager';
import './CustomerForm.css'
import { getAllLocations } from "../../modules/LocationManager";
import {getAllAnimals } from "../../modules/AnimalManager";

export const CustomerForm = () => {

    const [customer, setCustomer] = useState({
        name: "",
        phoneNumber: 0,
        locationId: 0
        
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

      const locationId = customer.locationId
      const animalId = customer.animalId
      
      if (locationId === 0 || animalId === 0 ) {
          window.alert("please select a location and an animal")          
      } else {
          addCustomer(customer)
            .then(() => history.push("./customers"))
      }
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
            <label htmlFor="location">Assign to location: </label>
            <select value={customer.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                <option value="0">Select a location</option>
                {locations.map(l => (
                    <option key={l.id} value={l.id}>
                        {l.name}
                    </option>
                ))}
            </select>
        </div>
    </fieldset>
    <fieldset>
				<div className="form-group">
					<label htmlFor="name">Animal name: </label>
					<input type="text" id="animalName" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal name" value={customer.animalName} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="breed">Animal breed: </label>
					<input type="text" id="animalBreed" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Animal breed" value={customer.animalBreed} />
				</div>
			</fieldset>
    {/* <fieldset>
        <div className="form-group">
            <label htmlFor="animalId">Animal: </label>
            <select value={customer.animalId} name="animal" id="animalId" onChange={handleControlledInputChange} className="form-control" >
                <option value="0">Select a animal</option>
                {animals.map(a => (
                    <option key={a.id} value={a.id}>
                        {a.name}
                    </option>
                ))}
            </select>
        </div>
    </fieldset> */}
    <button className="btn btn-primary"
        onClick={handleClickSaveCustomer}>
        Save customer
  </button>
</form>
  )
}