import React, { Component } from "react"
import './App.css';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import NavBar from "./components/NavBar"
import Login from './components/Login'
import Signup from './components/Signup'
import RecipeList from './containers/RecipeList'
import RecipeCard from './components/RecipeCard'
import Home from './components/Home'
import NewFormContainer from './containers/NewFormContainer'
import EditFormContainer from './containers/EditFormContainer'
import About from './components/About';
import { Route, Switch, withRouter } from 'react-router-dom'
import logo from './bread-logo.png'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, recipes } = this.props
    return (
      <div className="App">
        <App-header><img src={logo} alt="logo"/></App-header>
        { loggedIn ? <NavBar/> : ""}
        <Switch>
          <Route exact path='/' render={()=> loggedIn ? <RecipeList/> : <Home/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/recipes' component={RecipeList}/>
          <Route exact path='/recipes/new' component={NewFormContainer}/>
          <Route exact path="/about" component={About} />
          <Route exact path='/recipes/:id' render={props => {
            const recipe = recipes.find(recipe => recipe.id === props.match.params.id)
            return <RecipeCard recipe={recipe} {...props}/>
          }
        }/>
          <Route exact path='/recipes/:id/edit' render={props => {
            const recipe = recipes.find(recipe => recipe.id === props.match.params.id)
            return <EditFormContainer recipe={recipe} {...props}/>
          }
        }/>
        </Switch>
        <footer/>
      </div>
      );
    }
  }

  const mapStateToProps = state => {
    return({
      loggedIn: !!state.currentUser,
      recipes: state.userRecipes
    })
  }

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App));
