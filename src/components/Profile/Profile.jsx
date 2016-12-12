import React, { Component } from 'react';
import Logout from '../Logout/Logout.jsx';
export default class Profile extends Component {

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
      <header>
     <h1> ECEpeasy </h1>
      <Logout
      logout={this.logout.bind(this)}
      />
      </header>

      <div id="welcome">
      WELCOME --USERNAME HERE--
      </div>
      <div id="personal">
      YOUR CREATED VOLUNTEER OPPORTUNITIES
      </div>
      <div id="joined">
      OPPORTUNITIES JOINED
      </div>
      </div>
    )
  }
}
