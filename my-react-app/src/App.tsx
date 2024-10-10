import { useState } from 'react'
import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <p>{count}</p>

        <button
          onClick={() => setCount(count + 1)}
        >PLUS</button>
        <button
          onClick={() => setCount(count - 1)}
        >MINUS</button>
      </div>
    </>
  )
}

export default App
