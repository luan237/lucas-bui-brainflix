import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route
          exact
          path="/upload"
          render={(routerProps) => {
            return <VideoUpload {...routerProps} />;
          }}
        />
        <Route path="/:yakiv" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
