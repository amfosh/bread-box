import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupForm'
import recipeForm from './reducers/recipeForm'
import userRecipes from './reducers/userRecipes'
import searchText from './reducers/searchText'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'

const reducer = combineReducers({
  currentUser,
  loginForm,
  userRecipes,
  signupForm,
  recipeForm,
  searchText
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store;