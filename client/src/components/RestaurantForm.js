const RestaurantForm = (props) => {
  const { id } = props
  
  return id ? 'Edit Form' : 'New Form'
}

export default RestaurantForm