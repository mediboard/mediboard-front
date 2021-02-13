import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Body from './body/Body';


function App() {
  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default App;
