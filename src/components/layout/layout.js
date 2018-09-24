import React from 'react'
import './layout.css'

import Header from '../header/header'
   
const Layout = (props) => {
   return (
      <div>
         <Header/>
         
         <div className="container">
            {props.children}
         </div>
      </div>
   );
}


export default Layout
