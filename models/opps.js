const db = require('./db');

module.exports = {

  /* GET /events */
  getAllOpps(req, res, next) {
    db.any('SELECT * from volunteerOpp;')
      .then((opps) => {
        res.rows = opps;
console.log('opps...', opps)
        next();
      })
      .catch(error => next(error));
  },

  getOpp(req, res, next) {
    db.one(`SELECT * from volunteerOpp WHERE id = ${req.body.opp.id}`)
      .then((opp) => {
        res.rows = opp;
        next();
      })
      .catch(error => next(error));
  },

  getOppsForUser(req, res, next) {
    db.any(`SELECT * from events LEFT JOIN attendance ON attendance.event = events.id WHERE attendance.user = ${req.params.userID}`)
      .then((events) => {
        res.rows = events;
        next();
      })
      .catch(error => next(error));
  },

  /* POST /events */
  /* creates a new event, returns the newly created record */
  addOpp(req, res, next) {
    console.log('===addOpp===',req.body);
    db.any(
        `INSERT INTO volunteerOpp ( title, cause, description, location, opp_date) VALUES ($/title/, $/cause/, $/description/, $/location/, $/date/) returning *;`, req.body)
      .then((opp) => {
        console.log('ADDED OPP SUCCESSFUL');
        res.rows = opp;
        next();
      })
      .catch((error) => {
console.log('about to throw error');
        next(error);
console.log('just threw error');

console.log(error);
      });
  },

  attend(req, res, next) {
    db.any(`INSERT INTO attendance (user_id, event) VALUES ($/user_id/, $/event_id/)`, req.body)
      .then((event) => {
        console.log(req.body.user_id, 'is attending', req.body.event_id);
        res.rows = event;
        next();
      })
      .catch(error => next(error));
  },

  /* PUT /events/:eventID */
  // updateEvent(req, res, next) {
  //   // tID is invented here
  //   req.body.tID = Number.parseInt(req.params.eventID);
  //   req.body.completed = !!req.body.completed;
  //
  //   db.one(
  //     `UPDATE event SET
  //     name = $/name/,
  //     description = $/description/,
  //     completed = $/completed/,
  //     WHERE id = $/tID/
  //     returning *;
  //     `, req.body)
  //     .then((event) => {
  //       console.log('ADDED UPDATED SUCCESSFULLY');
  //       res.rows = event;
  //       next();
  //     })
  //     .catch(error => next(error));
  // },

  /* DELETE /events/:id */
  deleteOpp(req, res, next) {
    const tID = Number.parseInt(req.params.eventID, 10);

    db.none(`
      DELETE FROM event
      WHERE id = $1
      `, tID)

    .then(() => {
      console.log('DELETE COMPLETED');
      next();
    })
    .catch(error => next(error));
  },
}
