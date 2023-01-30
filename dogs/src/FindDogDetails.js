import DogDetails from "./DogDetails";
import { useState } from "react";
import { useParams } from "react-router-dom";

function FindDogDetails({ dogs }) {
  let { name } = useParams();

  //   if (name) {
  //     const currentDog = dogs.dogs.find(
  //       (dog) => dog.name.toLowerCase() === name.toLowerCase()
  //     );
  //     return <DogDetails dog={currentDog} />;
  //   }

  // if (name) {
  //   for (let i = 0; i < dogs.dogs.length; i++) {
  //     if (dogs.dogs[i].name.toLowerCase() === name.toLowerCase()) {
  //       return <DogDetails dog={dogs.dogs[i]} />;
  //     }

  if (name) {
    const currentDog = dogs.filter(
      (dog) => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={currentDog} />;
  }
  return null;
}

export default FindDogDetails;
