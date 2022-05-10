import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import Details from './pages/Details'

function App() {
  
  return (
    // this will be a header with a back button eventually
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Results" element={<Results />} />
      <Route path="Details" element={<Details />} />
    </Routes>
  );
}

export default App;
