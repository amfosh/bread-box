import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

const NavBar = ({ currentUser, loggedIn }) => {

    return (
        <div className="NavBar">
            <NavLink exact activeClassName="active" to="/recipes">My BreadBox</NavLink>
            <NavLink exact activeClassName="active" to="/recipes/new">New Recipe  </NavLink>
            { loggedIn ? <Logout/> : null }
            {/* { currentUser ? <h2>Welcome, {currentUser.attributes.username}!</h2> : "" } */}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(NavBar)