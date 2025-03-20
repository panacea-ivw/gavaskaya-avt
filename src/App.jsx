import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import './App.css';
import Sosal from './components/sosal/sosal'
import FormatLearning from './components/FormatLearning/FormatLearning';
import OurTeachers from './components/OurTeachers/ourteachers';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Sosal" element={<Sosal />} />
          <Route path='/OurTeachers' element={<OurTeachers />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
