import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ChatBox from './pages/ChatBox/ChatBox'
const App = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chatbox" element={<ChatBox />} />
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
