import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TeamInfo from './aboutPages/TeamInfo';
import JeremyTran from './aboutPages/JeremyTran';  
import GeovanniValadez from './aboutPages/GeovanniValadez';
import AnthonySilva from './aboutPages/AnthonySilva';
import AmanKhera from './aboutPages/AmanKhera';
import MozhganAhsant from './aboutPages/MozhganAhsant';
import IvanA from './aboutPages/IvanA';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<TeamInfo />} />
                    <Route path="/jeremy-tran" element={<JeremyTran />} />
                    <Route path="/geovanni-valadez" element={<GeovanniValadez />} />
                    <Route path="/anthony-silva" element={<AnthonySilva />} />
                    <Route path="/aman-khera" element={<AmanKhera />} />
                    <Route path="/mozhgan-ahsant" element={<MozhganAhsant />} />
                    <Route path="/ivan-ayala-brito" element={<IvanA />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
