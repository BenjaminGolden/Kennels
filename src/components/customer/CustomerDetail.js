import React, { useState, useEffect } from 'react';
import { getCustomerById } from '../../modules/CustomerManager';
import './CustomerDetail.css';
import { useParams, useHistory } from "react-router-dom";

export const CustomerDetail = () => {
    const [customer, setCustomer] = useState({name: "Benjamin James Golden is the Best", address: ""});

    const {customerId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getCustomerById(customerId)
        .then(customer => {
            // setCustomer(customer)
            setCustomer({
                name: customer.name,
                address: customer.address,
                phoneNumber: customer.phoneNumber,
                animals: customer.animals
            })
        });
      }, [customerId]);

return (
    <section className="customer">
        <h3 className="customer__name">Name: {customer.name}</h3>
        <div className="customer__address">Address: {customer.address}</div>
        <div className="customer__phoneNumber">Phone Number: {customer.phoneNumber}</div>
        <div className="customer__animals">Animals: {customer.animals?.map(animal => animal.name).join(", ")}</div>
    </section>

    );
}