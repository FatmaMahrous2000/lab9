import "./App.css";
// import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "./components/navbar/navbar";
import Movies from "./components/movies/movies";
import Tv from "./components/tv/tv";
import Home from "./components/home/home";
import Moviedetails from "./components/moviesDtails/movieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/products/product";
import Productdetails from "./components/productDetails/product details";
import Favs from "./components/favs/favs";

function App() {
  var title = "Movies";

  return (
    <>
     
      <Router>
      <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:id" exact component={Moviedetails} />
        <Route path="/home" component={Home} />
        <Route path="/tvs" component={Tv} />
        <Route path="/products" component={Products} />
        <Route path="/favs" component={Favs} />
        <Route path="/productdetails/:id" component={Productdetails} />
      </Router>
    </>
  );
}

export default App;
