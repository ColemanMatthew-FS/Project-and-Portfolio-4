import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'

function App() {
  
  return (
    // this will be a header with a back button eventually
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Results" element={<Results />} />
    </Routes>
  );
}

export default App;
