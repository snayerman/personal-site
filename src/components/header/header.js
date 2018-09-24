import React from 'react'
import * as Icon from 'react-feather';

import './header.css'

const Header = () => (
   <div className="headerContainer">
      <div id="name">
         <div id="letterCircle">S</div>
         <p>Sam Nayerman</p>
      </div>

      <div id="links">
         <a href="https://github.com/snayerman/"><Icon.Github/> GitHub </a>
         <a href="https://www.linkedin.com/in/samuel-nayerman/"><Icon.Linkedin/> LinkedIn</a>
      </div>
   </div>
)

export default Header