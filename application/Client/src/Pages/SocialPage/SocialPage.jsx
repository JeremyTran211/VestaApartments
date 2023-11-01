import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import "./SocialPage.css"
function SocialPage() {
  return (
    <div className=" ">
      <h2>Social Page</h2>
      
        {/* Add photo links button links and nav bar at the top */}

        
        <div class="container2">
          <div class="static-container" id="left-container">
          <Link to="/"><button class="square-button">Home</button></Link>
          <Link to="/listings"><button class="square-button">View Listings</button></Link>
          <Link to="/notifications"><button class="square-button">Notifications</button></Link>
          <Link to="/bookmarks"><button class="square-button">Bookmarks</button></Link>
          <Link to="/group-page"><button class="square-button">Groups</button></Link>
          <Link to="/edit-profile"><button class="square-button">Edit Profile</button></Link>
          <Link to="/edit-listing"><button class="square-button">Edit Your Listings</button></Link>
          <Link to="/messages"><button class="square-button">Messages</button></Link>
          
          </div>
          <div class="scrollable-container" id="middle-container">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac tincidunt vitae semper quis. Faucibus pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Integer feugiat scelerisque varius morbi enim. In nisl nisi scelerisque eu ultrices vitae auctor. Nunc consequat interdum varius sit amet mattis vulputate. Egestas congue quisque egestas diam in. Eget lorem dolor sed viverra ipsum nunc. Scelerisque eleifend donec pretium vulputate. At erat pellentesque adipiscing commodo elit at imperdiet dui. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Ultrices neque ornare aenean euismod elementum nisi. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus. Nullam eget felis eget nunc lobortis. Enim sit amet venenatis urna cursus. Felis imperdiet proin fermentum leo vel. In hac habitasse platea dictumst quisque sagittis. Tempor nec feugiat nisl pretium. Sed turpis tincidunt id aliquet risus feugiat in.

 Non curabitur gravida arcu ac tortor dignissim convallis. Integer eget aliquet nibh praesent tristique magna sit amet purus. Diam vulputate ut pharetra sit amet aliquam id diam. Mauris pharetra et ultrices neque ornare aenean euismod. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Sagittis purus sit amet volutpat consequat. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Morbi non arcu risus quis varius. In est ante in nibh mauris cursus mattis molestie. Urna cursus eget nunc scelerisque. Bibendum enim facilisis gravida neque.</p>
          </div>
          <div class="static-container" id="right-container">
            <a>
              <Link to="/">Home</Link>
            </a>
            <a>
              <Link to="/">Property Listing</Link>
            </a>
            <a>
              <Link to="/">Home</Link>
            </a>
            <a>
              <Link to="/">Property Listing</Link>
            </a>
            <a>
              <Link to="/">Home</Link>
            </a>
            <a>
              <Link to="/">Property Listing</Link>
            </a>
            <a>
              <Link to="/">Home</Link>
            </a>
          </div>
        </div>
     
      {/* For now links, later implement */}
    </div>
  );
}

export default SocialPage;
