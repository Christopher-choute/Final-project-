import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, useParams, Link } from "react-router-dom";
import { Form, Button, Container } from "semantic-ui-react";
import Edit from "./Edit";
import "./index.css";

function FishSingle({ deleteItem }) {
  const { id } = useParams();
  const [singleFish, setSingleFish] = useState();
  const [species, setSpecies] = useState("");
  const [price, setPrice] = useState("");
  const [tank_size, setTankSize] = useState("");
  const [image, setImage] = useState("");
  const [water_preference, setWaterPreference] = useState("");
  const [temperature_preference, setTemperaturePreference] = useState("");
  const [aggressiveness, setAggressiveness] = useState("");
  const [life_expectancy, setLifeExpectancy] = useState("");
  const [description, setDescription] = useState("");

  const [used, setUsed] = useState(false);
  

  useEffect(() => {
    fetch(`/fishes/${id}`)
      .then((res) => res.json())
      .then((data) => getFish(data));
  }, []);

  //  console.log(id)

  function getFish(fish) {
    setSpecies(fish.species);
    setPrice(fish.price);
    setTankSize(fish.tank_size);
    setImage(fish.image);
    setWaterPreference(fish.water_preference);
    setLifeExpectancy(fish.life_expectancy);
    setAggressiveness(fish.aggressiveness);
    setTemperaturePreference(fish.temperature_preference);
    setDescription(fish.description);
  }

  return (
    <div className="soloFish">
      <img src={image} className="fishImg" />
      <div className="container">
      <div className="info">
        <Link to={`/edit/${id}`}>
          <i className="edit icon" style={{ float: "right" }}></i>
        </Link>
        <h1>Species: {species}</h1>
        <h1>Price: ${price}</h1>
        <h2 className="h2"> Tank size: {tank_size} </h2>
        <h2 className="h2"> Water preference: {water_preference}</h2>
        <h2 className="h2"> Life expectancy: {life_expectancy} Years</h2>
        <h2 className="h2"> Aggressiveness: {aggressiveness}</h2>
        <h2 className="h2">Temperature preference: {temperature_preference}</h2>
        {/* <p className="h2">Description: {description}</p> */}
        <Button onClick={() => deleteItem(id)} className="btn">
          ORDER
        </Button>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
export default FishSingle;
