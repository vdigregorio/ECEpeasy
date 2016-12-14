import React, { Component } from 'react';
import Logout from '../Logout/Logout.jsx';
import Socket from '../Socket/Socket.jsx';

import './Profile.css';

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
      <div id="header">
     ECEpeasy
     <div id="logout">
      <Logout
      logout={this.logout.bind(this)}
      />
      <form action="/dashboard">
      <button id="profile">
      Dashboard
      </button>
      </form>
      </div>
      </div>
      <h1>  Welcome username</h1>
      <div id="contained">
      <div id="created">
      CREATED OPPS
      </div>
      <div id="gameco">
      <div id="game"
onClick={() => {
document.querySelector('#iframe').style.display='block';
     }}
      >

      </div>
      <iframe id="iframe" src="http://hex.frvr.com/">
      </iframe>
      </div>
      <div id="joined">
      JOINED OPPS
      </div>
      </div>
      <div className="socket-container">
          <Socket />
        </div>
      <div id="footer">
      <div
            id="open-chat"
            onClick={() => {
                      document.querySelector('.message-popup').style.display='block';
                    }}
          >

          </div>
        copyright 2016
        </div>
      </div>
    )
  }
}
