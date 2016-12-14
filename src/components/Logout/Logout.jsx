import React, { Component } from 'react';
import {browserHistory} from 'react-router';

export default class Logout extends Component {

logout() {
    this.setState({
      currentToken: '',
    }, () => {
      console.log('after logout ', this.state)
    });
    localStorage.removeItem('userName');
    localStorage.removeItem('userName');
    browserHistory.push('/')
    console.log('logged out')
  }
  render() {
    return(
      <div id="logs">
      <form action ="/">
      <button id="buttz" onClick={this.props.logout}>Logout</button>
      </form>
      </div>
    )
  }
}
