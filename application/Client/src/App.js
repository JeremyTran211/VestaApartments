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
import Main from "./Pages/MainPage/MainPage";
import Login from "./Pages/UserAccount/Login.jsx";
import VerificationTierTwo from "./Pages/UserAccount/VerificationTierTwo.jsx";
import Verification from "./Pages/UserAccount/VerificationPage.jsx";
import Register from "./Pages/UserAccount/Register";
import ForgotPassword from "./Pages/UserAccount/ForgotPassword.jsx"
import ResetPassword from "./Pages/UserAccount/ResetPassword.jsx";
import Listings from "./Pages/ListingsPages/ApartmentListing.jsx";
import Social from "./Pages/SocialPage/SocialPage";
import ViewListing from "./Pages/ListingsPages/PropertyListing.jsx";
import EditProperties from "./Pages/editProperies/EditProperties.jsx";

//Social Pages
import Notifications from "./Pages/SocialPage/Notifications/Notifications.jsx";
import ViewProfile from "./Pages/SocialPage/ProfilePage/ViewProfile";
import UserProfile from "./Pages/SocialPage/ProfilePage/UserProfile";
import EditProfile from "./Pages/SocialPage/ProfilePage/EditProfile.jsx"
import Groups from "./Pages/SocialPage/GroupsPage/GroupsPage.jsx";
import PersonalityTest from "./Pages/SocialPage/PersonalityTest/PersonalityTest.jsx";
import Messages from "./Pages/SocialPage/Messages/Messages.jsx";
import EditListing from "./Pages/SocialPage/EditListing/EditListing.jsx";
import Bookmarks from "./Pages/SocialPage/Bookmarks/BookmarksPage.jsx";

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
        <Routes>
          {/* NavBar Main Pages */}
          <Route path="/" element={<Main />} /> 
          <Route path="/social" element={<Social />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listings" element={<Listings />} />

          {/* User Account  */}
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verification-tier-two" element={<VerificationTierTwo/>} />
          <Route path="/verification" element={<Verification/>} />
          
          {/* Social Pages */}
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/view-profile" element={<ViewProfile />} />
          <Route path="/edit-profile" element={<EditProfile/>}/>
          <Route path="/personality-test" element={<PersonalityTest />} />
          
          <Route path="/groups" element={<Groups />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/messages" element={<Messages />} />

          {/* Listings */}
          <Route path="/listing-details" element={<ViewListing />} />
          <Route path="/edit-listing" element={<EditListing />} />
          <Route path="/edit-properties" element={<EditProperties />} />
          
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
