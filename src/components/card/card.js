import React from 'react'

import './card.css'

const Card = (props) => (
   <div className="cardPadding">
      <div className="cardContainer">
         <img src={props.img} style={props.height ? {width: "300px", height: props.height} : {width: "300px"}} />
      </div>
      <div id="companyName">{props.title}</div>
      <div>{props.description}</div>
      <div style={{fontSize: "15px"}}>{props.time}</div>
   </div>
)

export default Card