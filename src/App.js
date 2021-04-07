import React from 'react';
import Nav from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Project';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;