import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Messages.css";

const Messages = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = () => {
    console.log("Search button was clicked with query:", searchInput);

    if (searchInput) {
      navigate("/listings", { state: { searchQuery: searchInput } });
    }
  };
  return (
    <div class="main-body">
      
  <div class="container1">
    <div class="row">    
      <section class="discussions">
      
        <div class="discussion search">
        <Link to="/social"><button>Socials</button></Link>
          <div class="searchbar">
            <input type="text" placeholder="Search..."></input>
          </div>
        </div>
        <div class="discussion message-active">
          <div class="photo" >
            <div class="online"></div>
          </div>
          <div class="desc-contact">
            <p class="name">Not Joe</p>
            <p class="message">Hey Joe!</p>
          </div>
          {/* <div class="timer">12 sec</div> */}
        </div>

        
      </section>
      
      <section class="chat">
        <div class="header-chat">
          <i class="icon fa fa-user-o" aria-hidden="true"></i>
          <p class="name">Not Joe</p>
          <i class="icon clickable fa fa-ellipsis-h right" aria-hidden="true"></i>
        </div>
        <div class="messages-chat">
          <div class="message">
          <Link to="/view-profile"><div class="photo" >
              <div class="online"></div>
            </div></Link>
            <p class="text"> Joe </p>
          </div>
          <div class="message text-only">
            <p class="text"> Joe</p>
          </div>
          
          <div class="message text-only">
            <div class="response">
              <p class="text"> Hey not Joe</p>
            </div>
          </div>
          <div class="message text-only">
        
          </div>
          
          <div class="message">
            <Link to="/view-profile"><div class="photo" >
              <div class="online"></div>
            </div></Link>
            <p class="text"> Hey Joe!</p>
          </div>
          
        </div>
        <div class="footer-chat">
          <i class="icon fa fa-smile-o clickable"  aria-hidden="true"></i>
          <input type="text" class="write-message" placeholder="Type your message here"></input>
          <i class="icon send fa fa-paper-plane-o clickable" aria-hidden="true"></i>
        </div>
      </section>
    </div>
  </div>
  </div>
  );
};

export default Messages;
