// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchResturant from './components/SearchResturtant/SearchResturant';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Meals from './components/Meals/Meals';
import Home from './components/Home/Home';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import MealDetails from './components/MealDetails/MealDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>

        <SearchResturant></SearchResturant>

        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/meals">
            <Meals></Meals>
          </Route>

          <Route path="/meals/:mealId">
            <MealDetails></MealDetails>
          </Route>

          <Route path="/about">
            <About></About>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

      </Router>


    </div>
  );
}

export default App;
