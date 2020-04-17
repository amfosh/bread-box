import React, { Component } from "react"
// import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux';
// import { fetchRecipes } from './actions/fetchRecipes'

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/users/1')
    .then(res => {
      return res.json()
    })
  }

  render() {
    return (
    <div className="App">
      Hi
    </div>
  )};
}
export default App
