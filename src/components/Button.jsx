import React from 'react'


function Button(props) {
  
  
  const refresh = () => window.location.reload(true)

    return (
      <div className='buttonContainer'>
          <button onClick={props.togglePic}><h3>Suggest For Me</h3></button>
      <button onClick={refresh}> <h3>Clear Selection</h3></button> </div>
    
    )
}
  
export default Button

