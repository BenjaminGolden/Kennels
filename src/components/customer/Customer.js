import React from "react"
import "./Customer.css"
import { Link, useHistory } from "react-router-dom";

export const CustomerCard = ({customer, handleDeleteCustomer}) => {
  const history = useHistory();
  return (
    <div className="card">
      <div className="card-content">
        <h3>Name: <span className="card-customer">
          {customer.name}
        </span></h3>
        <p>Address: {customer.address}</p>
        <Link to={`/customers/${customer.id}`}>
            <button>Details</button>
        </Link>
        <button type="button" onClick={() => handleDeleteCustomer(customer.id)}>Discharge</button>
        <button type="button"onClick={() => history.push(`/customers/${customer.id}/edit`)}>Edit</button>  
      </div>
    </div>
  );
}