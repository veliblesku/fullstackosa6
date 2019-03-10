import React from 'react'
//import Note from './Note'
import { 
    makeVote
  } from '../reducers/anecdoteReducer' 
import {notificationChange} from '../reducers/notificationReducer'

const Anecdotes = ({store}) => {

    const notification = (content) => {
        store.dispatch(
            notificationChange(content)
        )
    }
    const vote = (id) => {
        store.dispatch(
          makeVote(id)
        )
      }
      
    return (
        <div>
          <h2>Anecdotes</h2>
          {store.getState().map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id) && notification(anecdote.content)}>vote</button>
              </div>
            </div>
          )}
          </div>
    )
}

export default Anecdotes