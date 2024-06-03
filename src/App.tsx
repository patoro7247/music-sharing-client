import { useState } from 'react'
import Player from './components/Player'
import './App.css'
import Feed from './components/feed/Feed'
// import MyTabs from './components/BottomNav';
import Settings from './components/settings/Settings';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Player />
      <Feed />
      <Settings />
    </>
  )
}

export default App
