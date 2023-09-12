import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TeamInfo from './TeamInfo';
import JeremyTran from './JeremyTran';  // Import the JeremyTran component

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<TeamInfo />} />
                    <Route path="/jeremy-tran" element={<JeremyTran />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
