import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles/App.css';
import TeamInfo from './Pages/About/TeamInfo';
import JeremyTran from './Pages/About/JeremyTran';  
import GeovanniValadez from './Pages/About/GeovanniValadez';
import AnthonySilva from './Pages/About/AnthonySilva';
import AmanKhera from './Pages/About/AmanKhera';
import MozhganAhsant from './Pages/About/MozhganAhsant';
import IvanA from './Pages/About/IvanA';
import LoginPage from './Pages/Login/login';
import Register from './Pages/Register/register';
import MainPage from './Pages/MainPage/MainPage';
import UnderConstruction from './Pages/UnderConstruction/UnderConstruction';
import ListingsPage from './Pages/Listing/ApartmentListing';


function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/jeremy-tran" element={<JeremyTran />} />
                    <Route path="/geovanni-valadez" element={<GeovanniValadez />} />
                    <Route path="/anthony-silva" element={<AnthonySilva />} />
                    <Route path="/aman-khera" element={<AmanKhera />} />
                    <Route path="/mozhgan-ahsant" element={<MozhganAhsant />} />
                    <Route path="/ivan-ayala-brito" element={<IvanA />} />
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/under-construction" element={<UnderConstruction/>} />
                    <Route path="/listings" element={<ListingsPage/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
