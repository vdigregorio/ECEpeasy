import React, { Component } from 'react';
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
        title={opp.title}
        description={opp.description}
        location={opp.location}
        date={opp.opp_date}
      />
    );
  // console.log(oppsComponents)
  return (
    <div className="oppList">
      <h1>List of Opportunities</h1>
      {oppsComponents || 'not working.'}
    </div>
  );
}

export default OppList;
