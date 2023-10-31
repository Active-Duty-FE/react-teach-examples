import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  keywordEl = React.createRef()
  handleSearch = () => {
    const{keywordEl:{current:{value:keyword}}} = this
    PubSub.publish('states',{
      isFirst: false,
      isLoading: true
    })
    axios.get(`/api/search/users?q=${keyword}`).then(
      res => {
        PubSub.publish('states',{
          error: '',
          users: res.data.items,
          isLoading: false
        })
      },
      err => {
        PubSub.publish('states',{
          isLoading: false,
          error: err.message
        })
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={this.keywordEl} type="text" placeholder="enter the name you search"/>&nbsp;<button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    )
  }
}
