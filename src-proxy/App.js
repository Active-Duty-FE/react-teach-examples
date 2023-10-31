import React, { Component } from 'react'
import axios from 'axios'

import './App.css'
export default class App extends Component {
  getStudentsData = () => {
    axios.get('http://localhost:3000/api1/students').then(
      res => {
        console.log(res);
      },
      error => {
        console.log('failed',error);
      }
    )
  }
  getCarsData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
      res => {
        console.log(res);
      },
      error => {
        console.log('failed',error);
      }
    )
  }

  render() {
    return (
      <div>
          <button onClick={this.getStudentsData}>AXIOS</button>
          <button onClick={this.getCarsData}>AXIOS</button>
      </div>
    )
  }
}
