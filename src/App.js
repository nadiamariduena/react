import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
//
import Shop from "./components/Shop";
import About from "./components/About";
import Nav from "./components/Nav";
//
//
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/Shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

// ------------ creating another component

const Home = () => {
  return (
    <div className="home">
      <div className="home-wrapper-section-top">
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          animi consequuntur, quis quo odit, a debitis accusamus eos ad natus
          nesciunt rem quisquam? Eius, iure repellat accusantium nostrum porro
          sint nihil magni ipsum omnis aliquid voluptatibus? Facere expedita ex
          molestias nisi, obcaecati numquam ipsa blanditiis quisquam eos iusto
          quos ducimus, velit animi in dignissimos ad iure incidunt reiciendis
          omnis cumque at aspernatur. Cupiditate, inventore dolor. Eligendi,
          quidem fugit! Porro illo aperiam accusantium incidunt quo ullam, natus
          sed reiciendis eius, atque accusamus sunt. Corporis minima praesentium
          deleniti quis recusandae quibusdam quo, ipsam reiciendis? Dolorem
          beatae quae libero perspiciatis a debitis obcaecati!
        </p>
      </div>
    </div>
  );
};

export default App;
