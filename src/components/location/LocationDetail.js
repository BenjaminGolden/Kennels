import React, {useState, useEffect} from "react";
import {getLocationById, deleteLocation} from "../../modules/LocationManager";
import "./LocationDetail.css";
import {useParams, useHistory} from "react-router-dom";

export const LocationDetail = () => {
    const [location, setLocation] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {locationId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getLocationById(locationId)
        .then(location => {
            setLocation(location)
            setIsLoading(false);
        });
    }, [locationId]);
    console.log(getLocationById(locationId));

    const handleDelete = () => {
        setIsLoading(true);
        deleteLocation(locationId).then(() => 
            history.push("./locations")
        );
    };

        //need to display animals and customers data in the details.
    return (
        <section className="card">
            <h3 className="location__name">Name: {location.name}</h3>
            <div className="location__address">Address: {location.address}</div>
            <div className="location__animals">Animals: {location.animals?.name}</div>
            <div className="location__employees">Customers: {location.customer?.name}</div>
            <button type="delete" disabled={isLoading} onClick={handleDelete}>Discharge</button>
        </section>
    )
}