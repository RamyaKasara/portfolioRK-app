import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/homepage';
import AboutMePage from './pages/aboutme';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-me" element={<AboutMePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App

// .page{
// background-color: #303030;
// }
