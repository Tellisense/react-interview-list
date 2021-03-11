import React from 'react'


const Child1 = ({ color, handleChild2Click }) => {



  return (
    <div style={{ margin: '3rem', backgroundColor: color }}>

      <h1>Child 1</h1>
      <button onClick={handleChild2Click}>Change Child2 color</button>
    </div>

  )


}

export default Child1