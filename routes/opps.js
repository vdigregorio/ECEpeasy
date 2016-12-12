const opps = require('express').Router();
const db = require('../models/opps');
// const auth = require('../models/auth');

/* convenience method for sending */
const sendJSONresp = (req, res) => {
console.log('sendJSONresp is executing');
  // res.json({token: res.token, data: res.rows});
  res.json(res.rows);
};

// events/:id
// this is more specific than the /events, so it goes above

// events.route('/:eventID')
//   .put(db.updateEvent, sendJSONresp)
//   .delete(db.deleteEvent, (req,res)=>res.send(req.params.eventID))

// events
// this is the most general route, so it goes last
opps.route('/all')
  .get(db.getAllOpps, sendJSONresp);

// opps.route('/:userID')
//   .get(db.getEventsForUser, sendJSONresp)
//   .post(auth.authorize, db.attend, sendJSONresp);

opps.route('/')
  .get(db.getAllOpps, sendJSONresp)
  .post(db.addOpp, sendJSONresp);

// export this so it is available to server.js
module.exports = opps;
