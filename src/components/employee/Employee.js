import React from "react"
import "./Employee.css"

//using an implicit return we can omit the {} and just use the ().
export const EmployeeCard = ({employee}) => (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">Location: {employee.location.name}</div>
        </section>
)