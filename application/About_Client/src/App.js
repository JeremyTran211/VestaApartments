import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TeamInfo from './About_Pages/TeamInfo';
import JeremyTran from './About_Pages/JeremyTran';  
import GeovanniValadez from './About_Pages/GeovanniValadez';
import AnthonySilva from './About_Pages/AnthonySilva';
import AmanKhera from './About_Pages/AmanKhera';
import MozhganAhsant from './About_Pages/MozhganAhsant';
import IvanA from './About_Pages/IvanA';

//added import 
import LoginPage from './About_Pages/login';
import Register from './About_Pages/register';

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
