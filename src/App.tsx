import { useState } from 'react'
import Player from './components/Player'
import './App.css'
import Feed from './components/feed/Feed'
// import MyTabs from './components/BottomNav';
import Settings from './components/settings/Settings';
import NavBar from './components/navbar/NavBar';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Player />
      <Feed />
      <NavBar />
    </>
  )
}

export default App
