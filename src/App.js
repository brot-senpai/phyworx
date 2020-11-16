
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, 
} from "react-router-dom";

import ThreeApp from "./components/three_app/threeApp";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/three">Three</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" >
              <Home/>
            </Route>
            <Route path="/three">
              <ThreeApp/>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
