import React, { Component } from 'react'
import AllPage from './pages1/AllPage'
import AllPage2 from './pages2/AllPages2'
import Allfront from './front/Allfront'
import AllAdmin from './PageAdmin/AllAdmin'
import './App.css'

export default class App extends Component {
  state = {
    page: sessionStorage.getItem('page') ? sessionStorage.getItem('page') : 1
  }
  render () {
    return (
      <div>
        {this.state.page * 1 === 1 ? (
          <Allfront />
        ) : this.state.page * 1 === 3 ? (
          <AllPage2 />
        ) : this.state.page * 1 === 2 ? (
          <AllPage />
        ) : this.state.page * 1 === 4 ? (
          <AllAdmin />
        ) : (
          <div>Gupper Teacher</div>
        )}
        {/* <AllPage2/> */}
      </div>
    )
  }
}
