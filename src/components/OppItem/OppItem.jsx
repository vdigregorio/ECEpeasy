import React, { Component } from 'react';

// const Opp = props => (
//   <div className="oppItem">
//     <h2>Title: {props.title}</h2>
//     <p>Description:  {props.description}</p>
//     <p>Location:  {props.location}</p>
//     <p>Date:  {props.date}</p>

//     {/* need to customize editing options for only creators of event */}

//   </div>
// );

// export default Opp;
const OppItem = props => (
  <div className="oppItem">
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <p>{props.location}</p>
    <p>{props.date}</p>

    {/* need to customize editing options for only creators of event */}

  </div>
);

export default OppItem;
