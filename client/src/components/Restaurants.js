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
    if(restaurants.length === 0){
      return <p>no restaurants</p>
    }
    return restaurants.map(restaurant =>{
      return <Restaurant key={restaurant.id} {...restaurant} updatedRestaurants={updateRestaurants}  deleteRestaurant={deleteRestaurant}/>
    })
  }

  const addRestaurant = (restaurant) => {
    let updatedRestaurants = [restaurant, ...restaurants]
    setRestaurants(updatedRestaurants)
  }

  const updateRestaurants = (restaurant) =>{
    let updatedRestaurants = restaurants.map(f => f.id === restaurant.id ? restaurant : f)
    setRestaurants(updatedRestaurants)
  }

  const deleteRestaurant = async (id) => {
    try {
      let res = await axios.delete(`/api/restaurants/${id}`)

      let updatedRestaurants = restaurants.filter(f=> f.id !== res.data.id)
      setRestaurants(updatedRestaurants)
    } catch(err) {
      console.log(err)
      alert('err occurred')
    }
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
        <RestaurantForm addRestaurant={addRestaurant}/>
        {renderRestaurants()}
      </>
    )
}

export default Restaurants