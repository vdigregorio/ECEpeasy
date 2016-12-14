import React, { Component } from 'react';
import SignLog from '../SignLog/SignLog.jsx';
import {browserHistory} from 'react-router';
import './App.css';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      signupForm: {
        username: '',
        password: ''
      },
      loginForm: {
        username: '',
        password: ''
      },
      currentToken: ''
    }
  }
  trackSignupForm(e) {
    let fieldsArr = e.target.parentElement.childNodes
    //skylar pls remember to consolelog fieldsArr
    this.setState({
      signupForm: {
        username: fieldsArr[0].value,
        password: fieldsArr[1].value
      }
    }, () => {
        console.log(this.state)
     })
  }
  trackLoginForm(e) {
    let fieldsArr = e.target.parentElement.childNodes
    this.setState({
      loginForm: {
        username: fieldsArr[0].value,
        password: fieldsArr[1].value
      }
    }, () => {
      // console.log(this.state)
    })
  }
  postSignup() {
    console.log('clicked')
    fetch('/user/signup', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.signupForm.username,
        password: this.state.signupForm.password
      })
    })
    .then((data) => {
      this.setState({
        signupForm: {
          username: '',
          password: ''
        }
      })
    }).then(()=> browserHistory.push('/dashboard'))
  }
  postLogin() {
    console.log('clicked')
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.loginForm.username,
        password: this.state.loginForm.password
      })
    })
    .then(r => r.json())
    .then((token) => {
      localStorage.setItem('token', token)
      this.setState({
        currentToken: token,
        loginForm: {
          username: '',
          password: ''
        }
      }, () => {
        console.log(this.state)
      })
    }).then(()=> browserHistory.push('/dashboard'))
  }


  render() {
    return(
      <div id="bg">
      <div id="header">
      ECEpeasy
      </div>

      <div id="quote">
      Your Chance To Help Others Is Here!
      </div>
        <SignLog
          trackSignupForm={this.trackSignupForm.bind(this)}
          postSignup={this.postSignup.bind(this)}
          trackLoginForm={this.trackLoginForm.bind(this)}
          postLogin={this.postLogin.bind(this)}
        />

        <div id="footer">

        copyright 2016
        </div>
      </div>
    )
  }
}
