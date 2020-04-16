import React, { Component } from "react"
// import logo from './logo.svg';
import './App.css';
// import { connect } from 'react-redux';
// import { fetchRecipes } from './actions/fetchRecipes'

class App extends Component {

  componentDidMount() {
    fetch('https://api.edamam.com/search?q=bread&app_id=dda883c5&app_key=467f0304c54cc387428ad8336e5231e8')
    .then(res => res.json())
    .then(data => console.log(data))
  }

  render() {
    return (
    <div className="App">
      Hi
    </div>
  )};
}
export default App
