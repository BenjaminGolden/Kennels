import React from "react"
import "./Locations.css"
import { Link } from "react-router-dom";

export const LocationCard = ({ location, handleDeleteLocation }) => {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <span className="card-locationName">
            {location.name}
          </span></h3>
          <p>address: {location.address}</p>
          <Link to={`/locations/${location.id}`}>
              <button>Details</button>
          </Link>
          <button type="button" onClick={() => handleDeleteLocation(location.id)}>Discharge</button>
        </div>
      </div>
    );
  }