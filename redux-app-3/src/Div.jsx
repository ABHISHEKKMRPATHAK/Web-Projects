import React, { useContext } from 'react'

function Div() {
    const val = useContext(ctx)
  return (
    <div>{console.log(ctx)}</div>
  )
}

export default Div