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
      myForm.oppDescription.value,
      myForm.oppLocation.value,
      myForm.oppDate.value
    );
    return false;
  };


    return(
<div className="oppWrap">
  <div className="innerWrapper">
    <h1
onClick={() => {
                      document.querySelector('#formcreate').style.display='block';
                    }}
    >+</h1>
    <div id="centering">
    <form id="formcreate" onSubmit={handleSubmit}>
      <div className="inputt">
        <input type="text" className="input1" name="oppTitle" placeholder="Volunteering Activity Name" />
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


