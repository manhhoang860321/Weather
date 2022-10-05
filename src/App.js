import "./App.css";
import Weather from "./components/Weather";
import WeatherTab from "./components/WeatherTab";

const App = () => {
  return (
    <div className="wrapper">
      <Weather></Weather>
      <WeatherTab></WeatherTab>;
    </div>
  );
};

export default App;
