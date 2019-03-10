import React from 'react';
import { notificationChange } from '../reducers/notificationReducer'



const Notification = (props) => {

  const anecdotes = props.store.getState()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      <p>{anecdotes[1].content}</p>
    </div>
  )
}

export default Notification
