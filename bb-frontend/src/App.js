import React, { Component } from "react"
// import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Login/>
  )};
}
export default connect(null, {getCurrentUser})(App);
