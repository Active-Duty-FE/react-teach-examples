import React, { Component } from 'react'

import './index.css'

export default class List extends Component {
  render() {
    const {users,isFirst,isLoading,error} = this.props
    const abc = true
    console.log(this.props)
    return (
      <div className="row">
        {
          isFirst ? <h2>请输入名字</h2> : isLoading ? <h2>Loading</h2> : error ? <h2>{error}</h2> :
          users.map(user => {
             return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img src={user.avatar_url} style={{width: '100px'}} alt="avatar" />
                </a>
                <p className="card-text">reactjs</p>
              </div>
            )
          })
        }
      </div>
    )
  }
}
