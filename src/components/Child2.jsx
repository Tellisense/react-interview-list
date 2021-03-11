import React from 'react'


const Child2 = ({ color, handleChild1Click }) => {

  return (
    <div style={{ margin: '3rem', backgroundColor: color }}>

      <h1>Child 2</h1>
      <button onClick={handleChild1Click}>Change Child1 color</button>
    </div>
  )


}

export default Child2