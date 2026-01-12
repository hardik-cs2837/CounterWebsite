import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Count Exp1 </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count )}  >
          Count={count}
        </button><br></br><br></br>
        <button onClick={() => setCount((count) => count + 1)}>
          Increase Count 
        </button>
        <button onClick={() => setCount((count) => 0)}>
          setCount=0
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
      Decrease Count
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Created By Hardik
      </p>
    </>
  )
}

export default App
