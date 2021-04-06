import React from "react"
import "./Locations.css"

export const LocationCard = ({location, handleDeleteLocation}) => (
    <section className="location">
        <h3 className="location__name">{location.name}</h3>
        <div className="location__address">Address: {location.address}</div>
        <button type="delete" onClick={() => handleDeleteLocation(location.id)}>Discharge</button>
    </section>
)