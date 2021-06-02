import {useState} from 'react'
import axios from 'axios'
const RestaurantForm = (props) => {
    const { id, addRestaurant, updateRestaurants } = props
    const [name, setName] = useState(props.name ? props.name : '')
    const [location, setLocation] = useState(props.location ? props.location : '')
    const [cuisine, setCuisine] = useState(props.cuisine ? props.cuisine : '')
    const [stars, setStars] = useState(props.stars ? props.stars: '')
    const getFormName = () =>{
      return id ? 'Edit Form' : 'New Form'
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let restaurant = {name, location, cuisine, stars} 
        console.log(restaurant)
        if(id){
            let res = await axios.put(`/api/restaurants/${id}`, restaurant)
            console.log(res)
            updateRestaurants(res.data)
        } else {
            let res = await axios.post('/api/restaurants', restaurant)
            console.log(res)
            addRestaurant(res.data)
        }
    }
    return(
        <>
          <h1>{getFormName()}</h1>
          <form onSubmit={handleSubmit}>
              <p>Name</p>
              <input value={name} onChange={(e)=> setName(e.target.value) } /> 
              <p>Location</p>
              <input value={location} onChange={(e)=> setLocation(e.target.value) } /> 
              <p>Cuisine</p>
              <input value={cuisine} onChange={(e)=> setCuisine(e.target.value) } /> 
              <p>Stars</p>
              <input value={stars} onChange={(e)=> setStars(e.target.value) } /> 
              <br /> 
              <button type={'submit'}>{id ? 'add': 'update'}</button>
          </form>
        </>
    )
}
export default RestaurantForm