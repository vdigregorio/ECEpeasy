import React, { Component } from 'react';
import{OppItem} from '../OppItem/OppItem.jsx';


export default class Opplist extends Component{
  // componentWillMount(){
  //   this.props.getAllOpps();
  // }
render(){
  const generateOpps = opps =>
  Object.keys(opps)
    .map((OppID, i) => (
      <OppItem
        key={i}
        title={opps[OppID].title}
        description={opps[OppID].description}
        location={opps[OppID].location}
        date={opps[OppID].opp_date}
      />
    ));



  return(


 <div className="oppList">
    <h1>List of Opportunities</h1>
    {generateOpps(this.props.opps)}
  </div>

)
}
}
