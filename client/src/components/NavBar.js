import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div style={{display:'flex'}}>
            <Link to='/'>Restaurants</Link>
            <p> - </p>
            <Link to='/about'>About</Link>
        </div>
    )
}

export default NavBar