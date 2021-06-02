import RestaurantForm from "./RestaurantForm"

const Restaurant = (props) => {
  const {name, location, stars, cuisine} = props
  return(
    <>
    <h1>{name}</h1>
    <p>Location: {location} Stars:{stars} cuisine:{cuisine}</p>
    <RestaurantForm{...props}/>
    <hr/>
    </>
  )
}

export default Restaurant