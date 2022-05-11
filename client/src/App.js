import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Results from './pages/Results'
import Details from './pages/Details'
import Header from './components/Header'

function App() {
  
  return (
    // this will be a header with a back button eventually
    <div style={styles.container}>
      <Header />
      <main style={styles.main}>
        <section style={styles.subContainer}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Results" element={<Results />} />
            <Route path="Details" element={<Details />} />
          </Routes>
        </section>
      </main>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: '#CDCDCD',
    fontSize: '.75rem',
    fontFamily: 'Interstate',
  },
  main: {
    padding: '55px 25px 0px 0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    
  },
  subContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    background: '#fff',
    borderRadius: '10px',
  },
}
