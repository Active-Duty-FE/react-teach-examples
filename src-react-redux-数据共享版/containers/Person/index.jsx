import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'
import {nanoid} from 'nanoid'

class Person extends Component {
  nameNode = React.createRef()
  ageNode = React.createRef()
  addPerson = () => {
    const name = this.nameNode.current.value
    const age = this.ageNode.current.value
    const personObj = {id:nanoid(),name,age}
    this.props.addPerson(personObj)
  }
  render() {
    return (
      <div>
        <h2>我是Person组件,上面的数据是{this.props.count}</h2>
        <input ref={this.nameNode} type="text" />
        <input ref={this.ageNode} type="text" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            this.props.persons.map((p) => {
              return <li key={p.id}>{p.name}---{p.age}</li>
            })
          }
        </ul>
      </div>
    )
  }
}
export default connect(
  state => ({persons:state.persons,count:state.count}),
  {
    addPerson: createAddPersonAction
  }
)(Person)