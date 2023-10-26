import React, { useState } from 'react';
function GroupsPage(){

  return (
    <div className=" ">
      <h2>groups Page</h2>
      <form style={{display:'flex', justifyContent:'center',flexDirection:'column',width:'25%',margin:"0 auto"}} >
       {<a>This page in under construction</a>}
      </form>
      {/* For now links, later implement */}
      <a href="/home">(Home)</a>
      <a href="/propertylisting">(Property Listing)</a>
      <a href="/bookmarks"> (Bookmarks)</a>
      {
        <a href="/GroupsPage"> (GroupsPage)</a>}
      <a href="/editprofile">(Edit Profile)</a>
      <a href="/editlistings"> (Edit Your listings)</a>
    </div>
  );
}

export default GroupsPage;