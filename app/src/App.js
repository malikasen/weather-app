import * as React from "react";
import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";

import Tasks from "./Tasks";
import Form from "./Form";
import Forecast from "./Forecast";
import * as apiClient from "./apiClient";

const App = () => (
  <main className="App">
    <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </main>
);

const Home = () => {
  const [city, setCity] = useState("");
  const [forecasts, setForecasts] = useState([]);

  const loadForecasts = async (city) => {
    const result = (await apiClient.getForecasts(city));
    console.log("result", result);
    setForecasts(result);
  }
  return (
    <div>
      <h1>{process.env.REACT_APP_TITLE}</h1>
      <h2>{process.env.REACT_APP_SUBTITLE}</h2>
      <Tasks />
      <header className="App-header">5-Day Forecast</header>
      <Form city={city} setCity={setCity} loadForecasts={loadForecasts}/>
      {city}
      <Forecast city={city} forecasts={forecasts} setForecasts={setForecasts}/>
    </div>
  )
};

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
