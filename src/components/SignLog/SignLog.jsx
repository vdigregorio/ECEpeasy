import React, { Component } from 'react';
export default class Signup extends Component {
  render() {
    return(
      <div>
      <div id="signup">
        <input onChange={this.props.trackSignupForm} type="text" placeholder="username"/>
        <input onChange={this.props.trackSignupForm} type="text" placeholder="password"/>
        <button onClick={this.props.postSignup}>Signup</button>
      </div>
      <div id="login">
        <input onChange={this.props.trackLoginForm} type="text" placeholder="username"/>
        <input onChange={this.props.trackLoginForm} type="text" placeholder="password"/>
        <button onClick={this.props.postLogin}>Login</button>

      </div>
      </div>
    )
  }
}
