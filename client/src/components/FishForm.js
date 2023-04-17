import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function FishForm({ handleNewFish }) {
  const history = useHistory();
  const [species, setSpecies] = useState("");
  const [tank_size, setTankSize] = useState("");
  const [price, setPrice] = useState("");
  const [water_preference, setWaterPreference] = useState("");
  const [image, setImage] = useState("");
  const [temperature_preference, setTemperaturePreference] = useState('"');
  const [aggressiveness, setAggressiveness] = useState("");
  const [life_expectancy, setLifeExpectancy] = useState("");

  function handleSpecies(species) {
    setSpecies(species.target.value);
  }

  function handleTankSize(tank_size) {
    setTankSize(tank_size.target.value);
  }

  function handleImage(image) {
    setImage(image.target.value);
  }

  function handlePrice(price) {
    setPrice(price.target.value);
  }

  function handleWaterPreference(water_preference) {
    setWaterPreference(water_preference.target.value);
  }

  function handleTemperature(temperature_preference) {
    setTemperaturePreference(temperature_preference.target.value);
  }

  function handleAggressiveness(aggressiveness) {
    setAggressiveness(aggressiveness.target.value);
  }

  function handleLifeExpectancy(life_expectancy) {
    setLifeExpectancy(life_expectancy.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    updateIsLoading(true);
    fetch("http://localhost:4000/fishes", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            species: species,
            tank_size: year,
            price: price,
            image: image,
            temperature_preference: temperature_preference,
            water_preference: water_preference,
            aggressiveness:aggressiveness,
            life_expectancy:life_expectancy,
          }),
        }).then((response) => {
            updateIsLoading(false);
        });
  }

  return(
    <Form onSubmit={handleSubmit} style={{ maxWidth: '1000px' }}>
    <h3 id ="form-title">Sell a fish!</h3>
    <Form.Field>
        <label>Make: </label>
        <input
            type="text"
            name="make"
            placeholder="Enter the make of the car"
            className = "input-text"
            onChange = {handleMake}
            value = {make}
        />
    </Form.Field>
    <Form.Field>
    <label>Model: </label>
    <input
        type="text"
        name = "model"
        placeholder="Enter the model of the car"
        className = "input-text"
        onChange = {handleModel}
        value = {model}
    />
    </Form.Field>
    <Form.Field>
        <label>Price: </label>
        <input
            type="text"
            name = "price"
            placeholder="Enter the price of the car"
            className = "input-text"
            onChange = {handlePrice}
            value = {price} 
        />
    </Form.Field>
    <Form.Field>
        <label>Year: </label>
        <input
            type="text"
            name = "year"
            placeholder="Enter the year of the car"
            className = "input-text"
            onChange = {handleYear}
            value = {year}
        />
    </Form.Field>
    <Form.Field>
        <label>Image URL:</label>
        <input
            type = "text"
            name = "image"
            placeholder="Enter the Car's URL"
            className = "input-text"
            onChange = {handleImage}
            value = {image}
        />
    </Form.Field>
    <Form.Field>
        <label>New or Used:</label>
        <input 
            type = 'text'
            name = 'used'
            placeholder="Is your car 'New' or 'Used' "
            className = 'input_checkbox'
            onClick = {handleUsed}
            value = {val}
        />
    </Form.Field>
    <Button type="submit">Post your car!</Button>
</Form>

  );

}

export default FishForm;
