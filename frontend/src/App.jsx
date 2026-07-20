import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Analysis from './pages/Analysis';
import NewAnalysis from './pages/NewAnalysis';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/analyses" element={<Analysis></Analysis>}></Route>
        <Route path="/new-analyses" element={<NewAnalysis></NewAnalysis>}></Route>
      </Routes>
    </Router>
  )
}

export default App;
