import "./App.css";

import Weather from "./components/Weather";
import Dropdown from "./components/Dropdown";

import { WeatherProvider } from "./context/WeatherContext";


function App() {
  return (
    <WeatherProvider>

      <Dropdown />
      <Weather />
    </WeatherProvider>
  );
}

export default App;
