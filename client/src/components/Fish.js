import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import FishCard from "./FishCard"
import './index.css'

function Fish(){
    const [fishData, setFishData] = useState([]);
    useEffect(() => {
        fetch("/fishes")
        .then(res => res.json())
        .then((data) => setFishData(data))
      },[]);
      
      const fishList = fishData.map((fish) => { 
        return(
            <FishCard
                key = {fish.id}
                id = {fish.id}
                image = {fish.image}
                species = {fish.species}
                price = {fish.price}
                tank_size = {fish.tank_size}
                water_preference = {fish.water_preference}
                temperature_preference = {fish.temperature_preference}
                aggressiveness = {fish.aggressiveness}
                life_expectancy = {fish.life_expectancy}
            />
        );
    });

      return(
        <ul className = "fish">{fishList}</ul>
      );

}

export default Fish;