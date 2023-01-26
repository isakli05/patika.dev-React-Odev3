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
    axios(`https://api.weatherbit.io/v2.0/forecast/daily?city=İstanbul,TR&key=348217764e0c4762ad9b8a8923cfd547&days=5`).then((res) => setWeather(res.data));
  }, []);
 
  return (
    <WeatherContext.Provider value={values}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
