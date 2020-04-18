import React from 'react'
// import Login from "./Login"
// import Logout from "./Logout"
import { connect } from 'react-redux'


const NavBar = ({currentUser}) => {

    return (
        <div className="NavBar">
            { currentUser ? <h2>Welcome, {currentUser.attributes.username}!</h2> : "" }
            <button> Log In </button>
            <button> Sign Up </button>
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser
    }
}

export default connect(mapStateToProps)(NavBar)