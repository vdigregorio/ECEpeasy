import React, { Component } from 'react';
import './OppList.css';
import OppItem from '../OppItem/OppItem.jsx';

// const dummy = {
//   fist: {
//     title: 'test',
//     description: 'test',
//     location: 'test',
//     opp_date: ''
//   }
// }
const OppList = props => {
  console.log('**&*********', props.opps)

  const oppsComponents = props.opps.map((opp, i) =>
      <OppItem
        key={i}
        cause={opp.cause}
        title={opp.title}
        description={opp.description}
        location={opp.location}
        date={opp.opp_date}
      />
    );
  // console.log(oppsComponents)
  return (
    <div className="oppList">
      <h1>Volunteer Feed</h1>
      {oppsComponents || 'not working.'}
    </div>
  );
}

export default OppList;
