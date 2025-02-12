import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Ensure the correct path for Header
import Footer from './components/Footer'; // Import the Footer component
import Home from './ pages/Home'; // Correct path for the Home component

function App() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Ensure the Header component uses forwardRef */}
        <Header ref={headerRef} />
        
        <main style={{ marginTop: `${headerHeight}px` }}>
          <Routes>
            <Route path="/" element={<Home headerHeight={headerHeight} />} />
          </Routes>
        </main>

        {/* Footer displayed on every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
