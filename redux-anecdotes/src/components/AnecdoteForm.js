import React from 'react'
import { makeAnecdote } from '../reducers/anecdoteReducer'

const NewAnecdote = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    props.store.dispatch(
      makeAnecdote(event.target.note.value)
    )
    event.target.note.value = ''
  }
  return (
    <div>
        <h2>Lisää anekdootti</h2>
        <form onSubmit={addAnecdote}>
        <input name="note" />
        <button type="submit">lisää</button>
        </form>
    </div>

  )
}

export default NewAnecdote