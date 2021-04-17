import React from 'react';

import Nav from './components/Navigation';
import About from './components/About';
import Portfolio from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Footer></Footer>

      </main>
    </div>
  );
}

export default App;