import React from "react";
import { useWeatherContext } from "../context/WeatherContext";


function Weather() {

  const { weather } = useWeatherContext();
  const weat = weather.data;
  const getDayName = (validDate, locale) => {
    let date = new Date(validDate);
    return date.toLocaleDateString(locale, { weekday: "long" });
  };
  let currentDate = Date().split(" ").slice(2, 3).toString();
  let currentTime = Date().split(" ").slice(4, 5).toString().slice(0, 2);

  return (
    
      <div className={`weather-container`}>
        {weat &&
          weat.map((item, i) => (            
            <div
              className={`weather-item ${
                String(item.valid_date.split("-").slice(2, 3)) === currentDate
                  ? "current"
                  : ""
              }`}
              key={i}
            >
              <div>{getDayName(item.valid_date)}</div>              
              <div>
                <img
                  src={`https://www.weatherbit.io/static/img/icons/${item.weather["icon"].slice(0,-1)}${
                    currentTime >= "7" ? "d" : "n"
                  }.png`} alt=""/>                  
              </div>
              
              <div className="temp">
                <span className={` ${currentTime >= "7" ? "active-temp" : "temp-color"}`}>
                  {item.high_temp}
                  <sup>°</sup>
                </span>{" "}
                <span className={`${currentTime >= "7" ? "temp-color" : "active-temp"}`}>
                  {item.low_temp}
                  <sup>°</sup>
                </span>
              </div>
            </div>
          ))}
      </div>
    
  );
}
export default Weather;
