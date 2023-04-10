import React from 'react'
import { connect } from 'react-redux'
import { InAction } from './action'
import { DecAction } from './action'

const App = ({local_variable,InAction,DecAction}) => {
  return (
    <div>
      <center>
      <h4>{local_variable}</h4>
      <button onClick={InAction}>INCREMENT</button>
      <button onClick={DecAction}>DECREMENT</button>
      </center>
    </div>
  )
}

const mapSateToProps= state=>({
  local_variable:state
})

export default  connect(mapSateToProps,{InAction,DecAction})(App);
