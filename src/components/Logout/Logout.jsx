import React, { Component } from 'react';
export default class Logout extends Component {

logout() {
    this.setState({
      currentToken: '',
    }, () => {
      console.log('after logout ', this.state)
    })
  }
  render() {
    return(
      <div>
      <form action="/">
      <button onClick={this.props.logout}>Logout</button>
      </form>
      </div>
    )
  }
}
