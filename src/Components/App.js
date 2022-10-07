import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { useEffect, useState } from "react";
import CartoonCard from "./CartoonCard";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Blog from "./Blog"
import About from "./About";
function App() {
  const API_url = "http://localhost:3000/cartoons";
  const [cartoons, setCartoons] = useState([]);

  useEffect(() => {
    fetch(API_url)
      .then((res) => res.json())
      .then((cartoons) => setCartoons(cartoons));
  }, []);

  return (
  
    <Router>
      <div className="App">
        <NavBar />
      </div>
      <Switch>
        <Route exact path ="/"><h3>My Cartoons Collection</h3>
        <div className="cartoons">
        {cartoons.map((cartoon) => {
          return <CartoonCard {...cartoon} />;
        })}
      </div>
        </Route>
        <Route exact path ="/about"> <About/></Route>
        <Route exact path ="/blog"><Blog /></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
