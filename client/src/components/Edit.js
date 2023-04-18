import React, {useState ,useEffect} from "react";
import {useHistory ,useParams} from "react-router-dom"
import {Form, Button} from"semantic-ui-react"
// import {Formik,Field,ErrorMessage} from 'formik';
import Fish from "./Fish";


function Edit({updateFish}){
    console.log('test')
    const { id } = useParams();
    const history = useHistory();
    const [species, setSpecies] = useState("");
    const [tank_size, setTankSize] = useState("");
    const [price, setPrice] = useState("");
    const [water_preference, setWaterPreference] = useState("");
    const [image, setImage] = useState("");
    const [temperature_preference, setTemperaturePreference] = useState('"');
    const [aggressiveness, setAggressiveness] = useState("");
    const [life_expectancy, setLifeExpectancy]= useState("");
    const [description, setDescription]= useState("");

    const [used, setUsed] = useState(false);
    // console.log(id)

    
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
    
    function handleTemperature(temperature_preference){
        setTemperaturePreference(temperature_preference.target.value)
    }
    
    function handleAggressiveness(aggressiveness){
        setAggressiveness(aggressiveness.target.value)
    }
    
    function handleLifeExpectancy(life_expectancy){
        setLifeExpectancy(life_expectancy.target.value)
    }
    
    function handleDescription(description){
        setDescription(description.target.value);
    }
    
    
    function handlePatch(id){
        fetch(`/fishes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({species: species, tank_size: tank_size, water_preference: water_preference, price: price, image: image, aggressiveness: aggressiveness, temperature_preference: temperature_preference, aggressiveness: aggressiveness, life_expectancy: life_expectancy}),
        }).then((res) => {
            if (res.ok) {
                res.json().then(updatedFish => {
                    updateFish(updatedFish)
                    history.push(`/fishes`)
                })
            }
        })
      }
      
    useEffect(() => {
        fetch(`/fishes/${id}`)
            .then(r => r.json())
            .then(fish => {
                setSpecies(fish.species);
                setPrice(fish.price);
                setTankSize(fish.tank_size);
                setImage(fish.image);
                setWaterPreference(fish.water_preference);
                setLifeExpectancy(fish.life_expectancy);
                setAggressiveness(fish.aggressiveness);
                setTemperaturePreference(fish.temperature_preference);
                setDescription(fish.description);
            })
    }, [])
    
    console.log('test')
    return (
            <Form onSubmit={() => handlePatch(id)} style={{ maxWidth: '1000px' }}>
            <h3 id ="form-title">Edit Fish info</h3>
            <Form.Field>
                <label>Species: </label>
                <input
                    type="text"
                    name="species"
                    placeholder="Enter the species"
                    className = "input-text"
                    onChange = {handleSpecies}
                    value = {species}
                />
            </Form.Field>
            <Form.Field>
            <label>Tank Size: </label>
            <input
                type="text"
                name = "Tank Size"
                placeholder="Enter the proper tank size"
                className = "input-text"
                onChange = {handleTankSize}
                value = {tank_size}
            />
            </Form.Field>
            <Form.Field>
                <label>Price: </label>
                <input
                    type="text"
                    name = "price"
                    placeholder="Enter the price"
                    className = "input-text"
                    onChange = {handlePrice}
                    value = {price} 
                />
            </Form.Field>
            <Form.Field>
                <label>Water preference: </label>
                <input
                    type="text"
                    name = "Water preference"
                    placeholder="Enter preference water type"
                    className = "input-text"
                    onChange = {handleWaterPreference}
                    value = {water_preference}
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
                <label>life expectancy:</label>
                <input 
                    type = 'text'
                    name = 'life expectancy'
                    placeholder="Enter your life expectancy"
                    className = 'input_text'
                    onChange= {handleLifeExpectancy}
                    value = {life_expectancy}
                />
            </Form.Field>
            <Form.Field>
                <label>aggressiveness:</label>
                <input 
                    type = 'text'
                    name = 'aggressiveness'
                    placeholder="Enter aggression"
                    className = 'input_text'
                    onChange= {handleAggressiveness}
                    value = {aggressiveness}
                />
            </Form.Field>
            <Form.Field>
                <label>Temperature:</label>
                <input 
                    type = 'text'
                    name = 'Temperature'
                    placeholder="Enter Temperature preference"
                    className = 'input_text'
                    onChange= {handleTemperature}
                    value = {temperature_preference}
                />
            </Form.Field>
            <Form.Field>
                <label>Description:</label>
                <input 
                    type = 'text'
                    name = 'Description'
                    placeholder="Enter Description"
                    className = 'input_text'
                    onChange= {handleDescription}
                    value = {description}
                />
            </Form.Field>
            <Button type= 'submit'>Submit Changes</Button>
        </Form>
    );
}

export default Edit;