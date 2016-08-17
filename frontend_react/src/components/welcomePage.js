import React, { Component } from 'react'
import { Link } from 'react-router'
import '../routes.js'

const WelcomePage = class extends Component {
  render(){
    return(
      <div>
        <h1> WELCOME! </h1>
        <Link to="/signin"><button>Sign In</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    )
  }
}

export default WelcomePage
