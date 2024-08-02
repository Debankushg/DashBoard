import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './page/Dashboard';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <div className="App">
        <Dashboard />
      </div>
    </Router>
    </>
  )
}

export default App
