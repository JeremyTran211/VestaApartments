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
import Register from "./Pages/UserAccount/Register";
import ForgotPasswordPage from "./Pages/UserAccount/ForgotPassword.jsx"
import ResetPasswordPage from "./Pages/UserAccount/ResetPassword.jsx";
import VerificationForm from "./Pages/UserAccount/VerificationForm.jsx";
import ListingsPage from "./Pages/ListingsPages/ApartmentListing.jsx";
import SocialPage from "./Pages/SocialPage/SocialPage";
import ViewListing from "./Pages/ListingsPages/PropertyListing.jsx";

//Social Pages
import NotificationsPage from "./Pages/SocialPage/Notifications/Notifications.jsx";
import ViewProfile from "./Pages/SocialPage/ProfilePage/ViewProfile";
import EditProfile from "./Pages/SocialPage/ProfilePage/EditProfile";
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
          <Route path="/" element={<MainPage />} /> {/* Maybe put stock photo in title and search container put a div that holds some stock photo, maybe sharper edges on container(not improtant) */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/verification-form" element={<VerificationForm />} />
          <Route path="/listings" element={<ListingsPage />} />{" "}
          {/* Needs fix on back to home button, fix view listings buttons, add map(important) */}
          <Route path="/listing-details" element={<ViewListing />} />{" "}
          {/* Needs fix on back to home button and many other buttons not in space properly. squares are funky(important)*/}
          {/* Social Pages */}
          <Route path="/social" element={<SocialPage />} />
          {/* Not done at all added left side links, needs recentering, sample posts, small messages box right side (important)*/}
          <Route path="/view-profile" element={<ViewProfile />} />{" "}
          {/* Same as edit profile */}
          <Route path="/personality-test" element={<PersonalityTest />} />{" "}
          {/* Fix back to home button, maybe make the container better, we can figure out questions at a different time*/}
          <Route path="/edit-profile" element={<EditProfile />} />{" "}
          {/* Center personality test button , make title bigger?(not super important) */}
          <Route path="/group-page" element={<GroupPage />} />
          {/* Not done at all (important)*/}
          <Route path="/messages" element={<MessagesPage />} />{" "}
          {/* search bar needs a button(not important)*/}
          <Route path="/notifications" element={<NotificationsPage />} />
          {/* fix FA boxes and view a tag(not important now)*/}
          <Route path="/edit-listing" element={<EditListing />} />
          {/* Needs fix on back to home button (important)*/}
          <Route path="/bookmarks" element={<BookmarksPage />} />
          {/* Not done at all(important) */}
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
