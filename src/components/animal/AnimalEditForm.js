import React, { useState, useEffect } from "react"
import "./AnimalForm.css"
import { updateAnimal, getAnimalById } from "../../modules/AnimalManager";
import { useParams, useHistory} from "react-router-dom";
import {getAllLocations} from "../../modules/LocationManager"
import { getAllCustomers } from "../../modules/CustomerManager";


export const AnimalEditForm = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [locations, setLocations] = useState([])
  const [customers, setCustomers] = useState([])

  const {animalId} = useParams();
  const history = useHistory();

  const handleFieldChange = evt => {
    const stateToChange = { ...animal };
    stateToChange[evt.target.id] = evt.target.value;
    setAnimal(stateToChange);
  };

  
	 const handleControlledInputChange = (event) => {
		const newAnimal = { ...animal }
		let selectedVal = event.target.value
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		newAnimal[event.target.id] = selectedVal
		setAnimal(newAnimal)
	}

    useEffect(() => {
             getAllLocations()
            .then(locationsFromAPI => {
                setLocations(locationsFromAPI)
            });
        
	}, []);

    useEffect(() => {
        getAllCustomers()
        .then(customersFromAPI => {
            setCustomers(customersFromAPI)
        })
    }, []);


  const updateExistingAnimal = evt => {
    evt.preventDefault()
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedAnimal = {
      id: animalId,
      name: animal.name,
      breed: animal.breed,
      locationId: animal.locationId,
      customerId: animal.customerId
    };

  updateAnimal(editedAnimal)
    .then(() => history.push("/animals")
    )
  }

  useEffect(() => {
    getAnimalById(animalId)
      .then(animal => {
        setAnimal(animal);
        setIsLoading(false);
      });
  }, []);
  

  return (
    <>
      <form className="animalForm">
        <fieldset>
          <div className="form-group">
              <label htmlFor="name">Animal name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={animal.name}
            />

            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="breed"
              value={animal.breed}
            />
          </div>
          <div className="form-group">
            <label htmlFor="location">Assign to location: </label>
            <select value={animal.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                <option value="0">Select a location</option>
                {locations.map(l => (
                    <option key={l.id} value={l.id}>
                        {l.name}
                    </option>
                ))}
            </select>
        </div>
        <div className="form-group">
            <label htmlFor="customer">Assign to customer: </label>
            <select value={animal.customerId} name="customer" id="customerId" onChange={handleControlledInputChange} className="form-control">
                <option value="0">Select a customer</option>
                {customers.map(c => (
                    <option key={c.id} value={c.id}>
                        {c.name}
                    </option>
                ))}
            </select>
        </div>
          <div className="alignRight">
            <button
              type="button" disabled={isLoading}
              onClick={updateExistingAnimal}
              className="btn btn-primary"
            > Submit</button>
          </div>
        </fieldset>
      </form>
    </>
  );
}