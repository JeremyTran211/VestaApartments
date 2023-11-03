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
import SocialPage from './Pages/SocialPage/SocialPage';
import ViewListing from './Pages/PropertyListing/PropertyListing';


//Social Pages
import NotificationsPage from './Pages/Notifications/Notifications';
import ViewProfile from './Pages/ProfilePage/ViewProfile';
import EditProfile from './Pages/ProfilePage/EditProfile';
import GroupPage from './Pages/GroupsPage/GroupsPage';
import PersonalityTest from './Pages/PersonalityTest/PersonalityTest';
import MessagesPage from './Pages/Messages/Messages';
import EditListing from './Pages/EditListing/EditListing';
import BookmarksPage from './Pages/Bookmarks/BookmarksPage';


//Under Construction
import UnderConstruction from './Pages/UnderConstruction/UnderConstruction';
import Navbar from './Navbar.js';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="App"> {/* Fix scrollability on height? for some reason its not showing everything*/}
                <Routes>
                    {/* Main Pages */}
                    <Route path="/" element={<MainPage />} /> {/* Maybe put stock photo in title and search container put a div that holds some stock photo, maybe sharper edges on container(not improtant) */}
                    <Route path="/login" element={<LoginPage/>} /> {/* funky, needs container for login, also register login buttons wack(important) */}
                    <Route path="/register" element={<Register/>} /> {/* similar to login (important)*/}
                    <Route path="/listings" element={<ListingsPage/>} /> {/* Needs fix on back to home button, fix view listings buttons, add map(important) */}
                    <Route path="/listing-details" element={<ViewListing/>} /> {/* Needs fix on back to home button and many other buttons not in space properly. squares are funky(important)*/}

                    {/* Social Pages */}
                    <Route path="/social" element={<SocialPage/>}/>{/* Not done at all added left side links, needs recentering, sample posts, small messages box right side (important)*/}
                    <Route path="/view-profile" element={<ViewProfile/>}/> {/* Same as edit profile */}
                    <Route path="/personality-test" element={<PersonalityTest/>}/> {/* Fix back to home button, maybe make the container better, we can figure out questions at a different time*/}
                    <Route path="/edit-profile" element={<EditProfile/>}/> {/* Center personality test button , make title bigger?(not super important) */}
                    <Route path="/group-page" element={<GroupPage/>}/>{/* Not done at all (important)*/}
                    <Route path="/messages" element={<MessagesPage/>}/> {/* search bar needs a button(not important)*/}
                    <Route path="/notifications" element={<NotificationsPage/>}/> {/* fix FA boxes and view a tag(not important now)*/}
                    <Route path="/edit-listing" element={<EditListing/>}/> {/* Needs fix on back to home button (important)*/}
                    <Route path="/bookmarks" element={<BookmarksPage/>}/> {/* Not done at all(important) */}

                    {/* About Pages */}
                    <Route path="/jeremy-tran" element={<JeremyTran />} />
                    <Route path="/geovanni-valadez" element={<GeovanniValadez />} />
                    <Route path="/anthony-silva" element={<AnthonySilva />} />
                    <Route path="/aman-khera" element={<AmanKhera />} />
                    <Route path="/mozhgan-ahsant" element={<MozhganAhsant />} />
                    <Route path="/ivan-ayala-brito" element={<IvanA />} />
                    {/* Under Construction */}
                    <Route path="/under-construction" element={<UnderConstruction/>} />
                </Routes>
            </div>
        </Router>
    );
    
}

export default App;
