import * as React from "react";

function Form({city, setCity, loadForecasts}) {
  function onClick(event) {
    event.preventDefault();
    const cityElement = document.getElementById('city');
    const city = cityElement.value;
    setCity(city);
    loadForecasts(city);
  }
  return (
    <div>
      <form onSubmit={onClick}>
        <input type='text' name='city' id='city' placeholder='Lookup Location' value={city} onChange={(e) => setCity(e.target.value)}></input>
        <input type='submit' id='submit' value='submit'></input>
      </form>
    </div>
  )
};

export default Form;