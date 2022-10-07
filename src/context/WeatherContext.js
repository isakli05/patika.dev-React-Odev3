import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const values = {
    weather,
    setWeather,
  };
  useEffect(() => {
    axios(`https://api.weatherbit.io/v2.0/forecast/daily?city=İstanbul,TR&key=67913ba8dbb14d5eb1f241fbd0ab93a7&days=5`).then((res) => setWeather(res.data));
  }, []);
 
  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
