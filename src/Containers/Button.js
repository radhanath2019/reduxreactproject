import React from 'react'
import { connect } from 'react-redux'
import { sayHello,addItem } from '../Actions'

let Button = ({ whatsUp, stateObject, saySomething,add }) => (
  <div >
    
    <button onClick={add}>Item Add</button>
    
  </div>
)

const mapStateToProps = (state) => ({
  whatsUp: state.say,
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
  saySomething: () => { dispatch(sayHello())},
  add: () => { dispatch(addItem())}
})

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default Button;