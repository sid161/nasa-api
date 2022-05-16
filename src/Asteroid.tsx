import React, { useState } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
// import "./App.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export interface Type {
  Input: any;
}

const Asteroid = () => {
  const [id, setId] = useState<Type["Input"]>("");
  const url = "5wReJoOG4QgBq1vvWiMTccqwjc5VY2cNpjUWMevy";
  const navigate: any = useNavigate();

  const handleClick = (id: any) => {
    fetch(` https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${url}`)
      .then((res) => res.json())
      .then((data) => navigate("/asteroidData", { state: data }));
  };

  const random = async (e: React.MouseEvent) => {
    try {
      let random_data = await fetch(
        `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${url}`
      )
        .then((res) => res.json())
        .then((data) => data.near_earth_objects);

      let random_id =
        random_data[Math.floor(Math.random() * random_data.length)].id;

      handleClick(random_id);
    } catch (error) {}
  };

  return (
    <>
      <Box className="card">
        <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
          <TextField
            data-testid="AsteroidInput"
            id="outlined-basic"
            onChange={(e) => setId(e.target.value)}
            label="Enter Asteroid Id"
            variant="outlined"
            sx={{
              margin: "0 auto",
            }}
          />
        </Box>
        {/* <input
          data-testid="AsteroidInput"
          onChange={(e) => setId(e.target.value)}
          type="text"
          placeholder="Enter asteroid id"
        /> */}
        <div className="btn">
          {/* <button
            className="submit"
            data-testid="submit"
            disabled={!id}
            onClick={() => handleClick(id)}
          >
            
          </button> */}
          <Button
            className="submit"
            data-testid="submit"
            disabled={!id}
            onClick={() => handleClick(id)}
            variant="contained"
          >
            Submit
          </Button>

          {/* <button data-testid="random" className="randombtn" onClick={random}>
            Random Asteroid Id
          </button> */}
          <Button
            data-testid="random"
            onClick={random}
            variant="contained"
            sx={{ marginLeft: "10px" }}
          >
            Random Asteroid Id
          </Button>
        </div>
      </Box>
    </>
  );
};

export default Asteroid;
