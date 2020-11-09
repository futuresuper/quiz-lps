import React from "react";
import { H1, Button } from "./elements";

const SaturdayMovie = ({ onClickMovie }) => {
  return (
    <div>
      <H1 style={{ marginBottom: 30 }}>
        You’re settling in for a Saturday night movie. What are you watching?
      </H1>
      <Button onClick={() => onClickMovie("Planet Earth")}>
        David Attenborough: Planet Earth
      </Button>
      <Button onClick={() => onClickMovie("Moana")}>Moana</Button>
      <Button onClick={() => onClickMovie("Cast Away ")}>Cast Away</Button>
      <Button onClick={() => onClickMovie("Wonder Woman")}>Wonder Woman</Button>
      <Button onClick={() => onClickMovie("Pursuit of Happiness")}>
        Pursuit of Happiness
      </Button>
      <Button onClick={() => onClickMovie("Notting Hill")}>Notting Hill</Button>
      <Button onClick={() => onClickMovie("Mystery Road")}>Mystery Road</Button>
    </div>
  );
};

export default SaturdayMovie;
