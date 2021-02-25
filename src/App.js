import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header></Header>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail}></Route>
    </Router>
  );
}

export default App;
