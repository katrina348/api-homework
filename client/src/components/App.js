import { Route, Switch } from 'react-router-dom';
import About  from './About';
import './App.css';
import AppRestaurants from './AppRestaurants';
import RestaurantForm from './components/RestaurantForm';
import NavBar from './components/NavBar';
import NoMatch from './components/NoMatch';

function App() {
  return(
    <>
    <NavBar />
    <Switch>
      <Route exact path='/' component={AppRestaurants} />
      <Route exact path='/about' component={About}/>
      <Route exact path='/newRestaurant' component={RestaurantForm}/>
      <Route component={NoMatch} />
    </Switch>  
    </>
  )
}

export default App;