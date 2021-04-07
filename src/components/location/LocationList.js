import React, { useState, useEffect} from "react";
import { LocationCard } from "./Locations"
import { getLocationById, getAllLocations, deleteLocation} from "../../modules/LocationManager"

export const LocationList = () => {
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        return getAllLocations()
        .then(locationsFromAPI => {
            console.log(locationsFromAPI)
            setLocations(locationsFromAPI)
        });
    };

    const handleDeleteLocation = id => {
        deleteLocation(id)
        .then(getLocations);
    };

    useEffect(() => {
        getLocations();
    }, []);

    return (
        <div className="container-card">
            {locations.map(location => <LocationCard key={location.id} location={location} handleDeleteLocation={handleDeleteLocation}/>)}
        </div>
    );
};