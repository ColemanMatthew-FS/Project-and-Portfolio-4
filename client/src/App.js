import React, { Component } from 'react'

function App() {
  const [response, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((response) => setData(response.message));
  }, []);
  return (
    <div className="App">
      <h1>Proof of concept</h1>
      <p>The following lines are accessed from the Aviationstack API</p>
      <p>The info is then securely loaded via Node and displayed via react</p>
      <p>{!response ? "Loading..." : response}</p>
    </div>
  );
}

export default App;
