import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/:id" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
