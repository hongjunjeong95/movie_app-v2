import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Header from "Components/Header";
import Home from "Routes/Home";
import About from "Routes/About";
import Detail from "Routes/Detail";

export default () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
};
