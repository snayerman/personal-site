import React from 'react'

import './card.css'

const Card = (props) => (
   <div className="cardPadding">
      <div className="cardContainer">
         <img src={props.img} style={{width: "300px"}} />
      </div>
      <div id="companyName">{props.company}</div>
      <div>{props.position}</div>
      <div style={{fontSize: "15px"}}>{props.time}</div>
   </div>
)

export default Card