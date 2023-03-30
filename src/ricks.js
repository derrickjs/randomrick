import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Ricks() {
  const { c_id } = useParams();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [species, setSpecies] = useState("");

  useEffect(() => {
    axios
    //.get(`https://rickandmortyapi.com/api/character/2`) used for testing.
      .get(`https://rickandmortyapi.com/api/character/${c_id}`)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setStatus(response.data.status);
        setImage(response.data.image);
        setSpecies(response.data.species);
      })
      .catch((error) => {
        console.log(error);
      });
  }, 
  [c_id]);

  return (
    <div className = "project">
      <h1 className="titleText">{name}</h1>
      <h2>Species: {species}</h2>
      
      <img  className = "image" src={image} alt={name} />

      <h2 className = "status">Status: {status}</h2>

    </div>
  );
}
