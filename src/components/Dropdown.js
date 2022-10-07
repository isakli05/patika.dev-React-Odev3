import React, { useEffect,useState } from "react";
import { useWeatherContext } from "../context/WeatherContext";
import axios from "axios";
import cities from "../cities.json";

function Dropdown() {
  const options = cities.map((i) => i.name);
  const defaultOptions = options[33];
  const { setWeather } = useWeatherContext();
  const [selectedCity, setSelectedCity] = useState('İstanbul')
  

  useEffect(() => {
    axios(`https://api.weatherbit.io/v2.0/forecast/daily?city=${selectedCity},TR&key=67913ba8dbb14d5eb1f241fbd0ab93a7&days=5`).then((res) => setWeather(res.data));
  }, [selectedCity, setWeather]);

  return (
    <div>
      <select
      tabIndex={0}
        id="cities"
        defaultValue={defaultOptions}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {cities.map((item, index) => (
          <option key={index} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.memo(Dropdown);
