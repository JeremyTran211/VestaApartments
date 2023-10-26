import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
function SocialPage(){


  return (
    <div className=" ">
      <h2>Social Page</h2>
      <form style={{display:'flex', justifyContent:'center',flexDirection:'column',width:'25%',margin:"0 auto"}} >
       
       {/* Add photo links button links and nav bar at the top */}

        {<a>This page in under construction</a>}
        {
        <div class="container">Post 1</div>}
        {
        <div class="container">Post 2</div>}
        {
        <div class="container">Post 3</div>}
      </form>
      {/* For now links, later implement */}
      <a href="/home">(Home)</a>
      <a href="/propertylisting">(Property Listing)</a>
      <a href="/bookmarks"> (Bookmarks)</a>
      <a href="/Groupspage"> (Groups)</a>
      <a href="/editprofile">(Edit Profile)</a>
      <a href="/editlistings"> (Edit Your listings)</a>


    </div>
  );
}

export default SocialPage;