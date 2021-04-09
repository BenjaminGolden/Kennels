import React, { useState, useEffect } from 'react';
import { EmployeeCard } from './Employee'
import { getAllEmployees, getEmployeeById, deleteEmployee } from "../../modules/EmployeeManager";
import { useHistory } from "react-router-dom"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        return getAllEmployees()
        .then(employeesFromAPI => {
            console.log(employeesFromAPI)
            setEmployees(employeesFromAPI)
        });
    };

    const history = useHistory();

    const handleDeleteEmployee = id => {
        deleteEmployee(id)
        .then(() => getAllEmployees());
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <>
        <section className="section-content">
            <button type="button" className="btn" onClick={() => {history.push("/employees/create")}}>Add Employee</button>
        </section>
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} handleDeleteEmployee={handleDeleteEmployee}/>)}
        </div>
        </>
    )
}