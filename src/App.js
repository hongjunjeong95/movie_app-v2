import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail}></Route>
    </Router>
  );
}

export default App;
