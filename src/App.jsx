import { useState } from 'react'
import Home from './components/Home'
import './cascade/Discord.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home/>
    </div>
  )
}

export default App
