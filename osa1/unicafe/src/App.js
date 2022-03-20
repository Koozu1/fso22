import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={() => setGood(good + 1)}> good </button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  
  if(good + bad + neutral > 0){
    return(
    <>
    
      <StatisticLine text={"good"} value={good} />
      <StatisticLine text={"neutral"} value={neutral} />
      <StatisticLine text={"bad"} value={bad} />
      <p>average {(good - bad) / (good + bad + neutral)}</p>
      <p>positive {good * 100 / (good + neutral + bad)} %</p>
    </>
    )
    }else{
      return(
        <p>No feedback given</p>
      )
    }
  
}
const StatisticLine = ({text, value}) => {
  return(
    <p>{text} {value}</p>
  )
}


export default App