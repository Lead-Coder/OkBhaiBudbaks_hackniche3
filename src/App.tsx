//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/signup'
import Login from './pages/login'

function App() {
  return (
    <>
      <div>
     <Router>
        <Routes>
           <Route path="/signup" element={<Signup />} />
           <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App