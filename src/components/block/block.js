import React from 'react'
   
const Block = (props) => {
   return (
      <div style={{ width: props.width, height: props.height, display: "flex", flexDirection: "column", backgroundColor: props.bg, alignItems: "center"}}>
         {props.children}
      </div>
   );
}


export default Block