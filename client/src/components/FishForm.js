import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

function FishForm({ handleNewFish }) {
  //   const history = useHistory();
  const [species, setSpecies] = useState("");
  const [tank_size, setTankSize] = useState("");
  const [price, setPrice] = useState("");
  const [water_preference, setWaterPreference] = useState("");
  const [image, setImage] = useState("");
  const [temperature_preference, setTemperaturePreference] = useState("");
  const [aggressiveness, setAggressiveness] = useState("");
  const [life_expectancy, setLifeExpectancy] = useState("");
  const [description, setDescription] = useState("");
  //   const [isLoading, updateIsLoading] = useState(false);
  console.log(tank_size)

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

  function handleDescription(description) {
    setDescription(description.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // updateIsLoading(true);
    fetch("/fishes", {
      method: "POST",
      headers: {
        // 'Accept': "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        species: "",
        tank_size: "",
        price: 300.0,
        image: "",
        temperature_preference: "",
        water_preference: "",
        aggressiveness:"" ,
        life_expectancy: "",
        description: "",
      }),
    }).then((response) => {
      return response.json()
      //   updateIsLoading(false);
    })
      .then((data)=> console.log(data));

  }

  return (
    <Form onSubmit={handleSubmit} style={{ maxWidth: "1000px" }}>
      <h3 id="form-title">Sell a fish!</h3>
      <Form.Field>
        <label>Species: </label>
        <input
          type="text"
          name="species"
          placeholder="Enter the species"
          className="input-text"
          onChange={handleSpecies}
          value={species}
        />
      </Form.Field>
      <Form.Field>
        <label>tank size: </label>
        <input
          type="text"
          name="tank_Size"
          placeholder="Enter the tank size"
          className="input-text"
          onChange={handleTankSize}
          value={tank_size}
        />
      </Form.Field>
      <Form.Field>
        <label>Price: </label>
        <input
          type="text"
          name="price"
          placeholder="Enter the price of the fish"
          className="input-text"
          onChange={handlePrice}
          value={price}
        />
      </Form.Field>
      <Form.Field>
        <label>Image URL:</label>
        <input
          type="text"
          name="image"
          placeholder="Enter the fish's URL"
          className="input-text"
          onChange={handleImage}
          value={image}
        />
      </Form.Field>
      <Form.Field>
        <label>Water preference:</label>
        <input
          type="text"
          name="water_preference"
          placeholder="what's you fish's water preference"
          className="input-text"
          onChange={handleWaterPreference}
          value={water_preference}
        />
      </Form.Field>
      <Form.Field>
        <label>Temperature preference:</label>
        <input
          type="text"
          name="temperature_preference"
          placeholder="what's your fish's water preference"
          className="input-text"
          onChange={handleTemperature}
          value={temperature_preference}
        />
      </Form.Field>
      <Form.Field>
        <label>Aggressiveness:</label>
        <input
          type="text"
          name="aggressiveness"
          placeholder="Enter the aggressiveness of the fish"
          className="input-text"
          onChange={handleAggressiveness}
          value={aggressiveness}
        />
      </Form.Field>
      <Form.Field>
        <label>Life Expectancy:</label>
        <input
          type="text"
          name="life_expectancy"
          placeholder="Enter the life expectancy of the fish"
          className="input-text"
          onChange={handleLifeExpectancy}
          value={life_expectancy}
        />
      </Form.Field>
      <Form.Field>
        <label>Description:</label>
        <input
          type="text"
          name="Description"
          placeholder="Enter Description"
          className="input_text"
          onChange={handleDescription}
          value={description}
        />
      </Form.Field>
      <Button type="submit">Post!</Button>
    </Form>
  );
}

export default FishForm;
