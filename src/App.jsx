import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/nav'
import TextAnalyzer from './component/Render'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <TextAnalyzer />
    </>
  )
}

export default App
