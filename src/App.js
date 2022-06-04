import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import Main from "./components/Main/Main";
import VideoUpload from "./pages/VideoUpload/VideoUpload";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <PageHeader />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/upload" component={VideoUpload} />
        <Route path="/:id" component={Main} />
        {/* <Route
          path="/:id"
          render={(routerProps) => {
            <Main {...routerProps} />;
          }} 
        />*/}
      </Switch>
    </Router>
  );
}

export default App;
