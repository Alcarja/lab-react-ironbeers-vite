import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AllBeersPage from "./pages/AllBeersPage";
import RandomBeerPage from "./pages/RandomBeerPage";
import AddBeerPage from "./pages/AddBeerPage";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [beers, SetBeers] = useState([]);

  useEffect(() => {
    const getBeersData = async () => {
      try {
        const res = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers`
        );
        SetBeers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getBeersData();
  }, []);

  return (
    <div className="App">
      <h1>LAB | React IronBeers</h1>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage beers={beers} />} />
        <Route path="/random-beer" element={<RandomBeerPage />} />
        <Route path="/new-beer" element={<AddBeerPage />} />
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
