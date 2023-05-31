import React, { Component } from 'react'
import url from '../host.js'
import axios from 'axios'
export default class Practic extends Component {
  state = {
    person: []
  }

  getPerson = () => {
    axios.get("https://backend-school-0u75.onrender.com/person").then(res => {
      this.setState({ person: res.data })
      console.log( this.state.person, "okey");
      console.log(res.data)
      
    })
  }

  componentDidMount () {
    this.getPerson()
  }

  render () {
    return (
      <div>
       <h2>Salom</h2>
        {this.state.person.map(item => (
          <h2>{item.personlastname}</h2>
        ))}
      </div>
    )
  }
}
