import RestaurantForm from "./RestaurantForm"

const Restaurant = (props) => {
  const {id, name, location, stars, cuisine, deleteRestaurant} = props
  return(
    <>
    <h1>{name}</h1>
    <p>Location: {location} Stars:{stars} cuisine:{cuisine}</p>
    <p onClick={()=>deleteRestaurant(id)}>delete</p>
    <RestaurantForm {...props}/>
    <hr/>
    </>
  )
}

export default Restaurant