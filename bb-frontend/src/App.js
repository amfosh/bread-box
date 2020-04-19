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
import RecipeCard from './components/RecipeCard'
import Home from './components/Home'
import RecipeForm from './components/RecipeForm'
// import MainContainer from "./components/MainContainer"
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <div className="App">
        
        <Router>
        { loggedIn ? <NavBar/> : <Home/> }
        {/* <Route exact path='/' render={()=> loggedIn ? <RecipeList/> : <Home/>}/> */}
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/recipes' component={RecipeList}/>
          <Route exact path='/recipes/new' component={RecipeForm}/>
          <Route exact path='/recipes/:id' component={RecipeCard}/>
        </Router>
        {/* <MainContainer/> */}
      </div>
      );
    }
  }

  const mapStateToProps = state => {
    return({
      loggedIn: !!state.currentUser
    })
  }

export default connect(mapStateToProps, {getCurrentUser})(App);
