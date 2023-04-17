import React from 'react'
import {useState,useEffect} from "react";
import {Route, Switch, useParams, Link} from "react-router-dom"
import {Form, Button} from"semantic-ui-react"
import Edit from './Edit';
import './index.css'


function FishSingle({deleteItem}){
    const {id} = useParams();
    const [singleFish, setSingleFish] = useState();

    const [species, setSpecies] = useState("");
    const [price, setPrice] = useState("");
    const [tank_size, setTankSize] = useState("");
    const [image, setImage] = useState("");
    const [water_preference, setWaterPreference] =useState ("");
    const [temperature_preference, setTemperaturePreference] = useState("")
    const [aggressiveness, setAggressiveness] = useState("")
    const [life_expectancy, setLifeExpectancy] = useState("")

    const [used, setUsed] = useState(false);


useEffect(() => {
    fetch(`/fishes/${id}`)
    .then(res => res.json())
    .then((data) => getFish(data))
  },[]);

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
  }

 return(
    <div className = 'soloFish'>
      
        <img src = {image} className = 'fishImg'/>
        <Link to={`/edit/${id}`} ><i  className="edit icon"></i></Link>
        <h1>species: {species}</h1>
        <h1>price: ${price}</h1>
        <h2 className ='h2' > Tank size: {tank_size}</h2>
        <h2 className ='h2'> Water preference: {water_preference}</h2>
        <h2 className ='h2'> Life expectancy: {life_expectancy}</h2>
        <h2 className ='h2'> Aggressiveness: {aggressiveness}</h2>
        <h2 className ='h2'> temperature preference: {temperature_preference}</h2>
        <Button onClick = {() => deleteItem(id)}   className = 'btn' >ORDER</Button>
    </div>
  )
 }
export default FishSingle;