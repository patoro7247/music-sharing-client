import { useState } from 'react'
import Player from './components/Player'
import './App.css'
import Feed from './components/feed/Feed'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Player />
      <Feed />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>

    </>
  )
}

export default App
