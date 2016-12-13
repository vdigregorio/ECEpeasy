import React, { Component } from 'react';
import Logout from '../Logout/Logout.jsx';
import OppForm from '../OppForm/OppForm.jsx';
import OppList from '../OppList/OppList.jsx';
import AjaxAdapter from '../../helpers/AjaxAdapter';
import Socket from '../Socket/Socket.jsx';
import './Dashboard.css';
export default class Dashboard extends Component {
constructor(props) {
    super();

    this.state = {
      opps: []
    };

    // this.addEvent = this.addEvent.bind(this);
  }
    logout() {
    this.setState({
      currentToken: '',
    }, () => {
      console.log('after logout ', this.state)
    })
  }

  // executed once the ProfilePage component mounts
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

 addOpp(title, description, location, date) {
    AjaxAdapter.addOpp({ title, description, location, date })
    .then((newOpp) => {
      // clone existing state
      const newState = { ...this.state.opps };
      newState[newOpp.id] = newOpp;
      this.setState({ opps: newState });
    })
    .catch((error) => {
      throw error;
    });
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
      <form action="/profile">
      <button id="profile">
      Profile
      </button>
      </form>
      </div>
      </div>
      <div id="search-container">
      <input id="searchOpps" type="search"></input>
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
      <div id="footer">
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
    )
  }
}
 //for formcreate onSubmit={handleSubmit}
 //for button submit onClick={props.addEvent}
