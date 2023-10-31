import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles/App.css';
//About Imports
import TeamInfo from './Pages/About/TeamInfo';
import JeremyTran from './Pages/About/JeremyTran';  
import GeovanniValadez from './Pages/About/GeovanniValadez';
import AnthonySilva from './Pages/About/AnthonySilva';
import AmanKhera from './Pages/About/AmanKhera';
import MozhganAhsant from './Pages/About/MozhganAhsant';
import IvanA from './Pages/About/IvanA';

//Main Imports
import MainPage from './Pages/MainPage/MainPage';
import LoginPage from './Pages/Login/login';
import Register from './Pages/Register/register';
import ListingsPage from './Pages/Listing/ApartmentListing';
import SocialPage from './Pages/SocialPage/SocialPage'


//Social Pages
import NotificationsPage from './Pages/Notifications/Notifications';
import ViewProfile from './Pages/ProfilePage/ViewProfile';
import EditProfile from './Pages/ProfilePage/EditProfile';
import GroupPage from './Pages/GroupsPage/GroupsPage';
import PersonalityTest from './Pages/PersonalityTest/PersonalityTest';
import MessagesPage from './Pages/Messages/Messages';
//Listing Pages


import UnderConstruction from './Pages/UnderConstruction/UnderConstruction';


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
                    <Route path="/view-profile" element={<ViewProfile/>}/>
                    <Route path="/notifications" element={<NotificationsPage/>}/>
                    <Route path="/social" element={<SocialPage/>}/>
                    <Route path="/group-page" element={<GroupPage/>}/>
                    <Route path="/edit-profile" element={<EditProfile/>}/>
                    <Route path="/personality-test" element={<PersonalityTest/>}/>
                    <Route path="/messages" element={<MessagesPage/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
