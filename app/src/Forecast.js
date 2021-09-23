import * as React from "react";
import { useState, useEffect } from "react";
import ForecastDay from "./ForecastDay";


function Forecast({city, forecasts, setForecasts}) {
  return (
    <div className='forecastList' class='container'>
      <div class='row'>
        {forecasts.map((forecast, index) => {
            return <ForecastDay forecast={forecast} key={index}/>
          })}
      </div>
    </div>
  )
};

export default Forecast;