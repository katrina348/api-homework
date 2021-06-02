import './App.css';
import Restaurants from './components/Restaurants';
import React, {useEffect} from 'react'

function AppRestaurants() {
  useEffect(()=>{
    console.log("AppRestaurants component Mounted")
},[])
  return (
    <div className="App">
      <Restaurants />
    </div>
  );
}

export default AppRestaurants;
