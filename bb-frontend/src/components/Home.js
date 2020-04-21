import React from 'react'
// import Login from './Login'
// import Logout from './Logout'
import { Link } from 'react-router-dom'

const Home = ({}) => (
    <div>
        <h2>Welcome to BreadBox! Please <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link>.</h2>
    </div>
);

export default Home 