import React, { Component } from 'react';
import Logout from '../Logout/Logout.jsx';
import OppForm from '../OppForm/OppForm.jsx';
import OppList from '../OppList/OppList.jsx';
import AjaxAdapter from '../../helpers/AjaxAdapter';
export default class Dashboard extends Component {
constructor(props) {
    super();

    this.state = {
      opps: {},
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
      <header>
     <h1> ECEpeasy </h1>
      <Logout
      logout={this.logout.bind(this)}
      />
      </header>
      <input type="search"></input>
      <button type="submit">Search</button>
      <OppForm
      addOpp={this.addOpp.bind(this)}
      />
      <div id="results">
      <OppList
      opps={this.state.opps}
      />
      </div>
      </div>
    )
  }
}
 //for formcreate onSubmit={handleSubmit}
 //for button submit onClick={props.addEvent}
