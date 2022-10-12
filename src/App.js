import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import Weather from "./components/Weather";
import C from "./components/C";

import T from "./components/T";
const App = () => {
  return (
    <div className="wrapper">
      {/* <C></C> */}
      {/* <T></T> */}
      <Weather></Weather>
    </div>
  );
};

export default App;
