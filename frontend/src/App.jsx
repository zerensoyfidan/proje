import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Analysis from './pages/Analysis';
import NewAnalysis from './pages/NewAnalysis';
import StartingPage from './pages/StartingPage';
import VoiceMessages from './pages/VoiceMessages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartingPage></StartingPage>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route> 
        <Route path="/analyses" element={<Analysis></Analysis>}></Route>
        <Route path="/new-analyses" element={<NewAnalysis></NewAnalysis>}></Route>
        <Route path="/voice-record" element={<VoiceMessages></VoiceMessages>}></Route>
      </Routes>
    </Router>
  )
}
export default App;
