import { useState } from 'react'
import Player from './components/Player'
import './App.css'
import Feed from './components/feed/Feed'
// import MyTabs from './components/BottomNav';
import NavBar from './components/navbar/NavBar';

function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
      <Player />
      <NavBar />
    </>
  )
}

export default App
