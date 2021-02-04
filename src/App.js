import logo from './logo.svg';
import './App.css';
import InfoPage from './InfoPage';
import RegistrationDisplay from './body/registration/registrationDisplay';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
  	<Router>
    <div className="App">
    	<Switch>
    		<Route path='/' exact={true}>
		      <InfoPage />
    		</Route>
    		<Route path='/register'>
    			<RegistrationDisplay />
    		</Route>
    	</Switch>
    </div>
    </Router>
  );
}

export default App;
