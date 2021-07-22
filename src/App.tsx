import {MemoryRouter as Router, Switch, Route} from "react-router-dom";

import Home from "./pages/Home";
import Website from "./pages/Website";

function App() {
  return (
    <Router initialEntries= {["/", "/website"]} initialIndex = {0} >
      <Switch>
      <Route exact path = "/" component = {Home} />
        <Route exact path = "/website" component = {Website} />
          </Switch>
          < /Router>
  );
}

export default App;
