import React, { Component } from 'react';
import './SignLog.css';
export default class Signup extends Component {
  render() {
    return(
      <div>
      <div className="surround">
<ul className="ul group">
  <li><a href="#w2">Sign Up</a></li>
  <li><a href="#w1">Log In</a></li>
</ul>
  <div className="wrapper">
      <div id="w2">
        <input onChange={this.props.trackSignupForm} type="text" placeholder="username"/>
        <input onChange={this.props.trackSignupForm} type="text" placeholder="password"/>
        <form action="/dashboard">
        <button onClick={this.props.postSignup}>Signup</button>
        </form>
      </div>
      <div id="w1">
        <input onChange={this.props.trackLoginForm} type="text" placeholder="username"/>
        <input onChange={this.props.trackLoginForm} type="text" placeholder="password"/>
        <form action="/dashboard">
        <button onClick={this.props.postLogin}>Login</button>
        </form>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
