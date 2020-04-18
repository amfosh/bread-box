import React, { Component } from "react"
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import NavBar from "./components/NavBar"
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
import RecipeList from './components/RecipeList'
import MainContainer from "./components/MainContainer"
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Logout/>
        <NavBar/>
        <Router>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/recipe-list' component={RecipeList}/>
        </Router>
        {/* <MainContainer/> */}
      </div>
      );
    }
  }


export default connect(null, {getCurrentUser})(App);
