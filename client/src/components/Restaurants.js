import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Restaurant from './Restaurant'
import RestaurantForm from './RestaurantForm'

const Restaurants = (props)=>{
  const [restaurants, setRestaurants] = useState([])

  useEffect (()=>{
    console.log('restaurant component mounted')
    getRestaurants()
  }, [])

  const renderRestaurants =()=>{
    if(restaurants.length == 0){
      return <p>no restaurants</p>
    }
    return restaurants.map(restaurant =>{
      return <Restaurant key={restaurant.id} {...restaurant} />
    })
  }

  const getRestaurants = async ()=>{
    try{
      let res = await axios.get('/api/restaurants')
      setRestaurants(res.data)
    }catch(err){
      alert('err occurred, check console')
      console.log(err)
    }
  }
    return (
      <>
        <h1>Restaurants</h1>
        <RestaurantForm/>
        {renderRestaurants()}
      </>
    )
}

export default Restaurants