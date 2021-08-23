// import logo from './logo.svg';
import './App.css';
import { Create } from './components/Pages/Create/Create';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Validate } from './components/Pages/Validate/Validate';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/create" component={Create} />
        <Route exact path="/validate" component={Validate} />
        <Route path="*" component={Create} />
      </Switch>
    </Router>
  );
}

export default App;
