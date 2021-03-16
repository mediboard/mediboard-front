import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MedicalBody from './medical/MedicalBody';
import Header from './shared/Header';


function App() {
  return (
  	<Router>
	    <div className="App">
	    	<Header />
	    	<Switch>
	    		<Route path='/medical' exact={true}>
	    			<MedicalBody />
	    		</Route>
	     	</Switch>
	    </div>
	  </Router>
  );
}

export default App;
