import React, { Component } from 'react'
import Form from "./Form"
import FetchPlayer from "./FetchPlayer"

import {BrowserRouter as Router , Route , Link} from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>

        <Route exact path = "/" component ={Form}/>
        <Route exact path = "/fetchPlayer" component ={FetchPlayer}/>
         </Router >
      </div>
    )
  }
}


