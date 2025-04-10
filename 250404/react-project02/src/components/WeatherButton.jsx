import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  & > button {
    font-size: 2rem;
  }
`;

const WeatherButton = ({ cities, handleCityChange, selectedCity }) => {
  return (
    <ButtonGroup>
      <Button
        variant={`${selectedCity === null ? "outline-primary" : "primary"}`}
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>
      {cities.map((city) => (
        <Button
          key={it}
          variant={`${selectedCity === city ? "primary" : "outline-primary"}`}
          onClick={() => setCity(city)}
        >
          {city}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default WeatherButton;
