import React from 'react'
import {NavLink} from 'react-router-dom'

export default function NavBar() {
    return(
        <div>
            <NavLink to="/">Home</NavLink><br/>
            <NavLink to="/upload">Upload</NavLink><br/>
            <NavLink to="/post">Post</NavLink>
        </div>
    )
}