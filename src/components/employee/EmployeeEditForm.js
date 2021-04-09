import React, { useState, useEffect } from "react"
import "./EmployeeForm.css"
import { updateEmployee, getEmployeeById } from "../../modules/EmployeeManager"
import { useParams, useHistory } from "react-router-dom";

export const EmployeeEditForm = () => {
    const [employee, setEmployee] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const {employeeId} = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...employee };
        stateToChange[evt.target.id] = evt.target.value;
        setEmployee(stateToChange);
    };

    const updateExistingEmployee = (evt) => {
        evt.preventDefault()
        setIsLoading(true);

        const editedEmployee = {
            id: employeeId,
            name: employee.name,
            email: employee.email,
            address: employee.address,
            phoneNumber:employee.phoneNumber

        };

        updateEmployee(editedEmployee)
        .then(() => history.push("/employees")
        )
    }

    useEffect(() => {
        getEmployeeById(employeeId)
            .then(employee => {
                setEmployee(employee);
                setIsLoading(false);
            });
    }, []);

    return (
        
            <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={employee.name}
            />
            <label htmlFor="name">Employee name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="email"
              value={employee.email}
            />
            <label htmlFor="email">Employee email</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="address"
              value={employee.address}
            />
            <label htmlFor="email">Employee address</label>
            
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="phoneNumber"
              value={employee.phoneNumber}
            />
            <label htmlFor="email">Employee phone number</label>
          </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingEmployee}
              className="btn btn-primary"
            >Submit</button>
          </div>
        </fieldset>
    </form>
      
    )
}