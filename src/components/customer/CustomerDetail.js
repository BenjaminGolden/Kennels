import React, { useState, useEffect } from 'react';
import { deleteCustomer, getCustomerById } from '../../modules/CustomerManager';
import './CustomerDetail.css';
import { useParams, useHistory } from "react-router-dom";

export const CustomerDetail = () => {
    const [customer, setCustomer] = useState({name: "Benjamin James Golden is the Best", address: ""});
    const [isLoading, setIsLoading] = useState(true);


    const {customerId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getCustomerById(customerId)
        .then(customer => {
            setCustomer(customer)
            setIsLoading(false);
            //long hand: does the same thing as setCustomer(customer) except each property must be written out. 
            // setCustomer({ 
            //     name: customer.name,
            //     address: customer.address,
            //     phoneNumber: customer.phoneNumber,
            //     animals: customer.animals 
            // })
        });
      }, [customerId]);

      const handleDelete = () => {
          setIsLoading(true);
          deleteCustomer(customerId).then(() =>
          history.push("/customers")
          );
      };



return (
    <section className="card">
        <h3 className="customer__name">Name: {customer.name}</h3>
        <div className="customer__address">Address: {customer.address}</div>
        <div className="customer__phoneNumber">Phone Number: {customer.phoneNumber}</div>   
        <div className="customer__animals">Animals: {customer.animals?.map(animal => animal.name).join(", ")}</div>
        <button type="delete" disabled={isLoading} onClick={handleDelete}>Discharge</button>
    </section>

    );
}

{/* <div>{</div> */}
//if I want to use set to remove duplicates, how do I use it on line 40?