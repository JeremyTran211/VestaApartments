import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Messages.css";
const FriendMessage = ({ message }) => {
  return (
    <div class="message">
      <Link to="/view-profile">
        <div class="photo">
          <div class="online"></div>
        </div>
      </Link>
      <p class="text"> {message} </p>
    </div>
  );
};
const UserMessage = ({ message }) => {
  return (
    <div class="message text-only">
      <div class="response">
        <p class="text"> {message}</p>
      </div>
    </div>
  );
};
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
              
              <div class="searchbar">
                <input type="text" placeholder="Search..."></input>
                <button>Search</button>
              </div>
              
            </div>
            <div class="discussion message-active">
              <div class="photo">
                <div class="online"></div>
              </div>
              <div class="desc-contact">
                <p class="name">Not Joe</p>
                <p class="message">Hey Joe!</p>
              </div>
            </div>
          </section>

          <section class="chat">
            <div class="header-chat">
              <i class="icon fa fa-user-o" aria-hidden="true"></i>
              {/* Change UserName */}
              <p class="name">Not Joe</p>
              <i
                class="icon clickable fa fa-ellipsis-h right"
                aria-hidden="true"
              ></i>
            </div>

            <div class="messages-chat">
              <FriendMessage message="JOE"></FriendMessage>
              <UserMessage message="test"></UserMessage>
              <UserMessage message="test"></UserMessage>
              <UserMessage message="test"></UserMessage>
              <UserMessage message="test"></UserMessage>
              <FriendMessage message="JOE"></FriendMessage>
            </div>

            <div class="footer-chat">
              <i class="icon fa fa-smile-o clickable" aria-hidden="true"></i>
              <input
                type="text"
                class="write-message"
                placeholder="Type your message here"
              ></input>
              <i
                class="icon send fa fa-paper-plane-o clickable"
                aria-hidden="true"
              ></i>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Messages;
