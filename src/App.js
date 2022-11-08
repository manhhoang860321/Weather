import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Weather from "./components/Weather";
import Tab from "./components/Tab";

const App = () => {
  return (
    <div className="wrapper">
      {/* <C></C> */}
      {/* <T></T> */}
      <Weather></Weather>
      {/* <Tab> </Tab> */}
    </div>
  );
};

export default App;
