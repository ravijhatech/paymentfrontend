import React from 'react'

function Button({btntext,onClick}) {
  return (
    <div>
      <button  style={{color:'white',backgroundColor:'black',height:'50px',width:'200px',borderRadius:'10px'}}
      onClick={onClick}
      >{btntext}</button>
    </div>
  )
}

export default Button
