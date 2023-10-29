import React, { useState } from 'react';

function BookmarksPage(){


  return (
    <div className=" ">
      <h2>Bookmarks Page</h2>
      <form style={{display:'flex', justifyContent:'center',flexDirection:'column',width:'25%',margin:"0 auto"}} >
       
       {/* Add photo links button links and nav bar at the top */}

        {<a>This page in under construction</a>}
       
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

export default BookmarksPage;