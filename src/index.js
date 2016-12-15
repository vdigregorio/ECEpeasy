import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App/App.jsx';
import Profile  from './components/Profile/Profile.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


ReactDOM.render(<Router history={browserHistory}>
        <Route path='/' component={App}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Route path='/profile' component={Profile}></Route>
      </Router>, document.querySelector('#root-container'));


