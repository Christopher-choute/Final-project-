import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FishSingle from "./FishSingle";
import "./index.css";

function FishCard({
  image,
  species,
  price,
  tank_size,
  water_preference,
  temperature_preference,
  aggressiveness,
  life_expectancy,
  id,
}) {
  const linkStyle = {
    textDecoration: "none",
  };

  return (
    // link path within div (/fish/id)
    <div className="fishCard">
      <Link to={`FishSingle/${id}`} style={linkStyle}>
        
          <img src={image} className="fishImg" />
          <div className="fishInfo">
            <p>Species: {species}</p>
            <p>Price: ${price}</p>
            {/* <p>Tank Size: {tank_size}</p>
                <p>Water Preference: {water_preference}</p>
                <p>Temperature Preference: {temperature_preference}</p>
                <p>Aggressiveness: {aggressiveness}</p>
                <p>Life Expectancy: {life_expectancy}</p> */}
        </div>
      </Link>
    </div>
  );
}
export default FishCard;
