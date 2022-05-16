import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Asteroid from "./Asteroid";
import AsteroidData from "./AsteroidData";

const Main = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Asteroid />} />
          <Route path="asteroidData" element={<AsteroidData />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
