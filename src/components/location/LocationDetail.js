import React, {useState, useEffect} from "react";
import {getLocationById, deleteLocation} from "../../modules/LocationManager";
import "./LocationDetail.css";
import {useParams, useHistory} from "react-router-dom";
import {getAnimalsByLocationId} from "../../modules/AnimalManager";

export const LocationDetail = () => {
    const [location, setLocation] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [animals, setAnimals] = useState([]);

    const {locationId} = useParams();
    const history = useHistory();

    useEffect(() => {
        getLocationById(locationId)
        .then(location => {
            // getAnimalsByLocationId(locationId)
            // .then(animals => {
            //     console.log(animals)
            //     setAnimals(animals)
                setLocation(location)
                setIsLoading(false);

                // });
        });
    }, [locationId]);

    const handleDelete = () => {
        setIsLoading(true);
        deleteLocation(locationId).then(() => 
            history.push("./locations")
        );
    };

    // const finalCustomersArray = () => {
    //     const customersArray = location.customers?.map(customer => customer);
    //     console.log(location)
    //     const removeDuplicateCustomers = new Set(customersArray);
    //      const finalArray = [...removeDuplicateCustomers];
    //      return finalArray.join(", ");
    //     }
    //     console.log(finalCustomersArray())

        //need to display animals and customers data in the details.
        
    return (
        <section className="card">
            <h3 className="location__name">Name: {location.name}</h3>
            <div className="location__address">Address: {location.address}</div>
            <div className="location__animals">Animals: {location.animals?.map(animal => animal.name).join(", ")}</div>
            {/* <div className="location__customers">Customers: {location.customers?.map(customer => customer.name).join(", ")} </div> */}
            <button type="delete" disabled={isLoading} onClick={handleDelete}>Discharge</button>
        </section>
    )
}
