import React, { useState, useEffect } from 'react';
import { getAnimalById } from '../../modules/AnimalManager';
import './AnimalDetail.css';
import { useParams, useHistory } from "react-router-dom"
//useParams allows us to look at the url at any parameters we have set

export const AnimalDetail = () => {
  const [animal, setAnimal] = useState({ name: "", breed: "" });

  const {animalId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getAnimalById(id) from AnimalManager and hang on to the data; put it into state
    console.log("useEffect", animalId)
    getAnimalById(animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          location: animal.location,
          customer: animal.customer
        });
      });
  }, [animalId]);

  return (
    <section className="animal">
      <h3 className="animal__name">Name: {animal.name}</h3>
      <div className="animal__breed">Breed: {animal.breed}</div>
      {/* the ? allows the code to run if location and name aren't present and the console will not throw errors.*/}
      <div className="animal__location">Location: {animal.location?.name}</div>
      <div className="animal__owner">Customer: {animal.customer?.name}</div>
    </section>
  );
}