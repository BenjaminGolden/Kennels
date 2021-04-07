import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom"
//using an implicit return we can omit the {} and just use the ().
export const EmployeeCard = ({employee, handleDeleteEmployee}) => {
        return (
          <div className="card">
            <div className="card-content">
              <h3>Name: <span className="card-employeeName">
                {employee.name}
              </span></h3>
              <p>Location: {employee.location?.name}</p>
              <Link to={`/employees/${employee.id}`}>
                  <button>Details</button>
              </Link>
              <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Discharge</button>
            </div>
          </div>
        );
      }