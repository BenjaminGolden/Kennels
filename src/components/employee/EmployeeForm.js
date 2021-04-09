import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addEmployee, getAllEmployees } from "../../modules/EmployeeManager"
import './EmployeeForm.css'
import {getAllLocations} from "../../modules/LocationManager"


export const EmployeeForm = () => {
    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        address: '', 
        phoneNumber: '' 
    });

    const [isLoading, setIsloading] = useState(false);

    const [locations, setLocations] = useState([]);
    const history = useHistory();
    
    const handleControlledInputChange = (event)  => {
        const newEmployee = { ...employee } 
        let selectedVal = event.target.value
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        } 
        newEmployee[event.target.id] = selectedVal
        setEmployee(newEmployee) 
    }

    useEffect(() => {
        getAllLocations()
        .then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    
}, []);

    // useEffect(() => {

    // })

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()
        const locationId = employee.locationId
        if(locationId === 0 ){
            window.alert("please select a location")
        } else {
            addEmployee(employee) 
            .then(() => history.push("/employees"))
        }
    }

    return (
        <>
        <form className="employeeForm">
            <h2 className="customerForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee name: </label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="employee name" value= {employee.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Employee address: </label>
                    <input type="text" id="address" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="employee address" value={employee.address} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number: </label>
                    <input type="text" id="phoneNumber" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="phone number" value={employee.phoneNumber} />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="email">employee email: </label>
                    <input type="text" id="email" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="email" value={employee.email} />
                </div>
            </fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="location">Assign to location: </label>
					<select value={employee.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a location</option>
						{locations.map(l => (
							<option key={l.id} value={l.id}>
								{l.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveEmployee}>
                Save employee
        </button>
        </form>
        </>
    )
}