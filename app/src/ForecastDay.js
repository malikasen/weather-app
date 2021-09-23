import * as React from "react";

function ForecastDay({forecast}) {
  const getDayOfWeek = () => {
    const date = new Date(forecast.dt*1000);
    switch(date.getDay()) {
      case 0: return "Sunday"
      case 1: return "Monday"
      case 2: return "Tuesday"
      case 3: return "Wednesday"
      case 4: return "Thursday"
      case 5: return "Friday"
      case 6: return "Saturday"
    }
  }
  const iconString = `http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`
  return (
    <div className='forecastDay' class='col ForecastCard'>
      <h3 id='dayOfWeek'>{getDayOfWeek()}</h3>
      <h3 className='date'>{forecast.dt_txt.substring(0,11)}</h3>
      <img className='weatherIcon' src={iconString} alt='Icon weather should be here'></img>
      <h4 className='temp'>Temp {forecast.main.temp} F</h4>
      <h4 className='description'>{forecast.weather[0].description}</h4>
      <h4 className='humidity'>Humidity: {forecast.main.humidity}</h4>
      <h4 className='wind'>Wind: speed {forecast.wind.speed}, deg {forecast.wind.deg}</h4>
    </div>
  )
}

export default ForecastDay;