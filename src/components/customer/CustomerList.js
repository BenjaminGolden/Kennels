import React, { useState, useEffect } from 'react';
import { CustomerCard } from "./Customer";
import { getAllCustomers, getCustomerById, deleteCustomer } from '../../modules/CustomerManager';


export const CustomerList = () => {
    const [customers, setCustomers] = useState([]);

    const getCustomers = () => {  
        return getAllCustomers()
            .then(customersFromAPI => {
            setCustomers(customersFromAPI)
        });
    };

    const handleDeleteCustomer = id => {
        deleteCustomer(id)
        .then(() => getCustomers());
    };

    useEffect(() => {
        getCustomers(); 
    }, []);

    return ( 
        <div className="container-cards">
            {customers.map(customer => <CustomerCard key={customer.id} customer={customer} handleDeleteCustomer={handleDeleteCustomer}/>)}
        </div>
    );
};