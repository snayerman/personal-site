import React from 'react'

import './category.css'

const Category = (props) => (
   <div className="categoryContainer">
      <span id="line"/>{props.title}<span id="line"/>
   </div>
)

export default Category