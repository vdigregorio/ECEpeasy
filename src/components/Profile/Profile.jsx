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
      <h1>  Welcome username</h1>
      <div id="created">
      CREATED OPPS
      </div>
      <div id="joined">
      JOINED OPPS
      </div>
      <div id="footer">
        copyright 2016
        </div>
      </div>
    )
  }
}
