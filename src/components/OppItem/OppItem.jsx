import React, { Component } from 'react';
import './OppItem.css';


const OppItem = props => (
  <div className="oppItem">
    <h2>{props.title}</h2>
    <h3>{props.cause}</h3>
    <p>{props.description}</p>
    <p>Where: {props.location}</p>
    <p>When: {props.date}</p>

  </div>
);

export default OppItem;
