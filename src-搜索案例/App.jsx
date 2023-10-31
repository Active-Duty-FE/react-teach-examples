import React, { Component } from 'react'
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    error: ''
  }
  setAppState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    return (
      <div className="container">
        <Search setAppState={this.setAppState}/>
        <List {...this.state}/>
      </div>
    )
  }
}
