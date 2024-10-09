// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TwitterLogin from './twitterLogin';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TwitterLogin />} />
      
        </Routes>
      </div>
    </Router>
  );
};

export default App;
