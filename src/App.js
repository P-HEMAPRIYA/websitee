import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NameDescription from './Components/NameDescription.js';  // Import the component
import menImage from './men.jpg';  // Import the image
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <div className="page-content">
          <div className="left-half">
            <img src={menImage} alt="mypic" />
          </div>
          <div className="right-half">
            <NameDescription />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
