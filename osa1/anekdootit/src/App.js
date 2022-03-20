import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  const [value, setValue] = useState(anecdotes.map(elem => 0))
  const [selected, setSelected] = useState(0)

  const nextAnecdote = () =>{
    setSelected(selected === anecdotes.length - 1 ? 0 : selected + 1)
  }


  //{anecdotes[selected]}
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {value[selected]} votes</p>

      <button onClick={() =>{
        let clone = [...value]
        clone[selected]++
        setValue(clone)
      }}>vote</button>

      <button onClick={() => nextAnecdote()}>next anecdote</button>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[value.indexOf(Math.max(...value))]}</p>
      <p>has {value[value.indexOf(Math.max(...value))]} votes</p>
    </div>
  )
}

export default App