import React from "react"
import "./Employee.css"
import { Link, useHistory } from "react-router-dom"
//using an implicit return we can omit the {} and just use the ().
export const EmployeeCard = ({employee, handleDeleteEmployee}) => {
  const history = useHistory();
        return (
          <div className="card">
            <div className="card-content">
              <h3>Name: <span className="card-employeeName">
                {employee.name}
              </span></h3>
              
              <Link to={`/employees/${employee.id}`}>
                  <button>Details</button>
              </Link>
              <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Discharge</button>
              <button type="button" onClick={() => history.push(`/employees/${employee.id}/edit`)}>Edit</button>
            </div>
          </div>
        );
      }