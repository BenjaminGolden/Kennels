import React, {useState, useEffect} from 'react';
import {getEmployeeById} from "../../modules/EmployeeManager";
import './EmployeeDetail.css';
import {useParams, useHistory} from 'react-router-dom';
import { deleteEmployee } from '../../modules/EmployeeManager';

export const EmployeeDetail = () => {
    const [employee, setEmployee] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {employeeId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getEmployeeById(employeeId)
        .then(employee => {
            console.log(employee)
            setEmployee(employee)
            setIsLoading(false);
        });
    },
    [employeeId]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteEmployee(employeeId).then(() =>
        history.push("/employees")
        );
    };

    return (
        <section className="card">
            <h2>Employee Details</h2>
            <h3 className="employee__name">Name: {employee.name}</h3>
            <div className="employee__location">Location: {employee.location?.name}</div>
            <div className="employee__phoneNumber">Phone number: {employee.phoneNumber}</div>
            <button type="button" disabled={isLoading} onClick={handleDelete}>Discharge</button>
        </section>
    );
}