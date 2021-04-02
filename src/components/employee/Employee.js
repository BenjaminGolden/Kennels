import React from "react"
import "./Employee.css"

//using an implicit return we can omit the {} and just use the ().
export const EmployeeCard = () => (
        <section className="employee">
            <h3 className="employee__name">Shittie Cat</h3>
            <div className="employee__location">Location: Nashville North</div>
        </section>
)