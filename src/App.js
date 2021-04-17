import React from 'react';

import Nav from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Project';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Footer></Footer>

      </main>
    </div>
  );
}

export default App;