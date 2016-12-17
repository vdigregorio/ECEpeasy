import React, { Component } from 'react';
import './OppForm.css';
export default function OppForm(props) {



    //recycled from techScout project 3
    const handleSubmit = (event) => {
    // stop the event from leaving the form
    event.preventDefault();
    const myForm = event.target;
    console.log('myForm is..', myForm);
    props.addOpp(

      myForm.oppTitle.value,
      myForm.oppCreator.value,
      myForm.oppCause.value,
      myForm.oppDescription.value,
      myForm.oppLocation.value,
      myForm.oppDate.value
    );
    return false;
  };

const usernameizzle = localStorage.getItem('userName');
    return(
<div className="oppWrap">
  <div className="innerWrapper">
    <h1
id="rotate" onClick={() => {
                      document.querySelector('#formcreate').style.display='block';
                    }}
    >+</h1>
    <div id="centering">
    <form id="formcreate" onSubmit={handleSubmit}>
      <div className="inputt">
        <input type="text" className="input0" name="oppTitle" placeholder="Volunteering Activity Name" />
        <input type="text" className ="inputno" name="oppCreator" value={usernameizzle}/>
        <select className="input1" name="oppCause" placeholder="Cause" >
        <option selected="selected">Choose Your Cause</option>
        <option value="Children/Youth">Children/Youth</option>
        <option value="Animals">Animals</option>
        <option value="Arts & Culture">Arts & Culture</option>
        <option value="Community Development">Community Development</option>
        <option value="Health/Hospitals">Health/Hospitals</option>
        <option value="Mental Health">Mental Health</option>
        <option value="Education & Literacy">Education & Literacy</option>
        <option value="Homelessness">Homelessness</option>
        </select>
        <input type="text" className="input2" name="oppDescription" placeholder="Volunteering Activity Description" />
        <input type="text" className="input3" name="oppLocation" placeholder="Add Location" />
        <input type="date" className="input4" name="oppDate" placeholder="Add Date" />

      <button onClick={() => {
                      document.querySelector('#formcreate').style.display='none';
                      {props.addOpp};
                    }} type="submit" className="submitbutt" >Add Volunteering Activity</button>
      </div>
    </form>
    </div>

  </div>
</div>
    )
  }


