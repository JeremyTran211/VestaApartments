import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Styles/App.css";
//About Imports
import TeamInfo from "./Pages/About/TeamInfo";
import JeremyTran from "./Pages/About/JeremyTran";
import GeovanniValadez from "./Pages/About/GeovanniValadez";
import AnthonySilva from "./Pages/About/AnthonySilva";
import AmanKhera from "./Pages/About/AmanKhera";
import MozhganAhsant from "./Pages/About/MozhganAhsant";
import IvanA from "./Pages/About/IvanA";

//Main Imports
import MainPage from "./Pages/MainPage/MainPage";
import LoginPage from "./Pages/UserAccount/Login.jsx";
import VerificationTierTwo from "./Pages/UserAccount/VerificationTierTwo.jsx";
import VerificationPage from "./Pages/UserAccount/VerificationPage.jsx";
import Register from "./Pages/UserAccount/Register";
import ForgotPasswordPage from "./Pages/UserAccount/ForgotPassword.jsx"
import ResetPasswordPage from "./Pages/UserAccount/ResetPassword.jsx";
import ListingsPage from "./Pages/ListingsPages/ApartmentListing.jsx";
import SocialPage from "./Pages/SocialPage/SocialPage";
import ViewListing from "./Pages/ListingsPages/PropertyListing.jsx";
import EditProperties from "./Pages/editProperies/EditProperties.jsx";

//Social Pages
import NotificationsPage from "./Pages/SocialPage/Notifications/Notifications.jsx";
import ViewProfile from "./Pages/SocialPage/ProfilePage/ViewProfile";
import UserProfile from "./Pages/SocialPage/ProfilePage/UserProfile";
import EditProfile from "./Pages/SocialPage/ProfilePage/EditProfile.jsx"
import GroupPage from "./Pages/SocialPage/GroupsPage/GroupsPage.jsx";
import PersonalityTest from "./Pages/SocialPage/PersonalityTest/PersonalityTest.jsx";
import MessagesPage from "./Pages/SocialPage/Messages/Messages.jsx";
import EditListing from "./Pages/SocialPage/EditListing/EditListing.jsx";
import BookmarksPage from "./Pages/SocialPage/Bookmarks/BookmarksPage.jsx";

//Under Construction
import UnderConstruction from "./Pages/UnderConstruction/UnderConstruction";
import Testing from "./Pages/UnderConstruction/testRegister.jsx";

//Design
import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
   
        {/* Fix scrollability on height? for some reason its not showing everything*/}
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<MainPage />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/verification-tier-two" element={<VerificationTierTwo/>} />
          <Route path="/verification-page" element={<VerificationPage/>} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/listing-details" element={<ViewListing />} />
          
          {/* Social Pages */}
          <Route path="/social" element={<SocialPage />} />
          <Route path="/view-profile" element={<ViewProfile />} />
          <Route path="/personality-test" element={<PersonalityTest />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/group-page" element={<GroupPage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/edit-listing" element={<EditListing />} />
          <Route path="/edit-profile" element={<EditProfile/>}/>
          <Route path="/edit-properties" element={<EditProperties />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />

          {/* About Pages */}
          <Route path="/team-info" element={<TeamInfo />} />
          <Route path="/jeremy-tran" element={<JeremyTran />} />
          <Route path="/geovanni-valadez" element={<GeovanniValadez />} />
          <Route path="/anthony-silva" element={<AnthonySilva />} />
          <Route path="/aman-khera" element={<AmanKhera />} />
          <Route path="/mozhgan-ahsant" element={<MozhganAhsant />} />
          <Route path="/ivan-ayala-brito" element={<IvanA />} />
          {/* Under Construction */}
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="/testing" element={<Testing />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
