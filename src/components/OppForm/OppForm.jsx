import React, { Component } from 'react';
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
    <h1>Create Volunteer Opportunity</h1>
    <form className="formcreate" onSubmit={handleSubmit}>
      <div className="input">
        <input type="text" className="input1" name="oppTitle" placeholder="Volunteering Activity Name" />
        <input type="text" className="input2" name="oppDescription" placeholder="Volunteering Activity Description" />
        <input type="text" className="input3" name="oppLocation" placeholder="Add Location" />
        <input type="date" className="input4" name="oppDate" placeholder="Add Date" />
      <button type="submit" className="submitbutt" onClick={props.addOpp}>Add Volunteering Activity</button>
      </div>
    </form>

  </div>
</div>
    )
  }


