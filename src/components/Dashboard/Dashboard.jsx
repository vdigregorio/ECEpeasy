import React, { Component } from 'react';
import Logout from '../Logout/Logout.jsx';
import OppForm from '../OppForm/OppForm.jsx';
import OppList from '../OppList/OppList.jsx';
import AjaxAdapter from '../../helpers/AjaxAdapter';
import Socket from '../Socket/Socket.jsx';
import {browserHistory} from 'react-router';

import './Dashboard.css';
//anything browserhistory/localstorage related originated from imani! she helped me with this!
export default class Dashboard extends Component {
constructor(props) {
    super();

    this.state = {
      opps: [],
    };

  }

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
  componentDidMount() {
    AjaxAdapter.getAllOpps()
      .then((allOpps) => {
        // console.log(allOpps)
        this.setState({ opps: allOpps });
      }
    )
    .catch((error) => {
        throw error;
    });
  }






 addOpp(cause, title, description, location, date) {
    AjaxAdapter.addOpp({ cause, title, description, location, date })
    .then((newOpp) => {
      // clones the existing state
      const newState = { ...this.state.opps };
      newState[newOpp.id] = newOpp;
      this.setState({ opps: newState });
    })
    .catch((error) => {
      throw error;
    });
  }


  render() {
    const usernameizzle = localStorage.getItem('userName');
    return(
      <div>
      <div id="header">
     ECEpeasy
     <div id="logout">
     <h5>{usernameizzle}</h5>
      <Logout
      logout={this.logout.bind(this)}
      />
      <form id="formz" action="/profile">
      <button id="buttz2">
      Profile
      </button>
      </form>
      </div>
      </div>
      <div id="search-container">
      <select className="searching" name="oppCause" placeholder="Cause" >
        <option defaultValue="selected">Search By Cause</option>
        <option value="Children/Youth">Children/Youth</option>
        <option value="Animals">Animals</option>
        <option value="Arts & Culture">Arts & Culture</option>
        <option value="Community Development">Community Development</option>
        <option value="Health/Hospitals">Health/Hospitals</option>
        <option value="Mental Health">Mental Health</option>
        <option value="Education & Literacy">Education & Literacy</option>
        <option value="Homelessness">Homelessness</option>
        </select>
      <button id="searchbut" type="submit">Search</button>
      </div>
      <OppForm
      addOpp={this.addOpp.bind(this)}
      />
      <div id="results">


         <OppList
            opps={this.state.opps}
            />


      </div>
      <div className="socket-container">
          <Socket />
        </div>
        <div className="push">
        </div>
      <div id="footer1">
      <div id="footer-content">
        <div
            id="open-chat"
            onClick={() => {
                      document.querySelector('.message-popup').style.display='block';
                    }}
          >

          </div>
          copyright &#169; 2016
          </div>
      </div>
      </div>
    )
  }
}
 //for formcreate onSubmit={handleSubmit}
 //for button submit onClick={props.addEvent}
