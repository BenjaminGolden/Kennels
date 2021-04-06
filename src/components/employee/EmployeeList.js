import React, { useState, useEffect } from 'react';
import { EmployeeCard } from './Employee'
import { getAllEmployees, getEmployeeById, deleteEmployee } from "../../modules/EmployeeManager";

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return getAllEmployees()
        .then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };

    const handleDeleteEmployee = id => {
        deleteEmployee(id)
        .then(() => getAllEmployees());
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} handleDeleteEmployee={handleDeleteEmployee}/>)}
        </div>
    )
}