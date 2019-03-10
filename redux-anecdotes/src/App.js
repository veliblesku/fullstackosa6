import React from 'react';
import reducer from './reducers/anecdoteReducer';
import { 
  makeVote, makeAnecdote
} from './reducers/anecdoteReducer' 
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'

const App = (props) => {
  const anecdotes = props.store.getState()
  const store = props.store
  


  // const createAnecdote = (event) => {
  //   event.preventDefault()
  //   store.dispatch(
  //     makeAnecdote(event.target.anecdote.value)
  //   )
  //   event.target.anecdote.value = ''
  // }
  
  return (
    <div>
      <div>
        <AnecdoteList store={store}/>
        <NewAnecdote store={store}/>
        <Notification store={store}/>
      
      </div>
    
      {/* <form onSubmit={createAnecdote}>
        <div><input name="anecdote"/></div>
        <button type="submit">create</button>
      </form> */}
    </div>
  )
}

export default App
