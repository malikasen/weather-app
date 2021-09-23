import express from "express";

import * as db from "./db.mjs";
import fetch from 'node-fetch';

const forecastRouter = express.Router();

forecastRouter.get("/", (request, response) => {
  let forecastsAtNoon; 
  const city = request.query.city;
  console.log(request.query);
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid="+process.env.WEATHER_API_KEY)
    .then((res) => res.json())
    .then(function(json) {
      console.log(json);
      const forecastIndexes = [3,11,19,27,35];
      if (json.list !== undefined) {
        forecastsAtNoon = json.list.filter((forecast,index) => {
          return forecastIndexes.includes(index);
        });
        console.log(forecastsAtNoon);
        response.json(forecastsAtNoon);
      }
    })
});
forecastRouter.get("/cities/:cityName", (request, response) => {
  // const city = db.getCityByName(request.params.cityName); 
  // response.send(request.params);
  // console.log(request.params);
  let forecastsAtNoon; 
  const city = request.params.cityName;
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid="+process.env.WEATHER_API_KEY)
    .then((res) => res.json())
    .then(function(json) {
      console.log(json);
      const forecastIndexes = [3,11,19,27,35];
      if (json.list !== undefined) {
        forecastsAtNoon = json.list.filter((forecast,index) => {
          return forecastIndexes.includes(index);
        });
        console.log(forecastsAtNoon);
        response.json(forecastsAtNoon);
      }
    })
})

forecastRouter.use(express.json());

export default forecastRouter;