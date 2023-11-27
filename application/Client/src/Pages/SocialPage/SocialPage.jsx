import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SocialPage.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const SinglePost = ({
}) => {
  return (
    <div className="single-post" >
      <div class="post-actions__attachments">
        <img src="https://placehold.co/40" alt="PFP" />
        <p>@JoeIsCool</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac
        tincidunt vitae semper quis. Faucibus pulvinar elementum integer
        enim neque volutpat ac tincidunt vitae. Integer feugiat scelerisque
      </p>
      <div className="like-icon-wrapper">
        <ThumbUpIcon className="like-icon" />
      </div>
    </div>
  );
};
function SocialPage() {
  const [textInput, setTextInput] = useState("");

  const handleInputChange = (event) => {
    let value= event.target.value
    if(value.length>180){
      return;
    }
    setTextInput(event.target.value);
  };

  return (
    <div className=" ">
      <h2>Social Page</h2>

      {/* Add photo links button links and nav bar at the top */}

      <div class="container2">
        <div class="static-container even-spacing" id="left-container">
          <Link to="/">
            <button class="square-button">Home</button>
          </Link>
          <Link to="/listings">
            <button class="square-button">View Listings</button>
          </Link>
          <Link to="/notifications">
            <button class="square-button">Notifications</button>
          </Link>
          <Link to="/bookmarks">
            <button class="square-button">Bookmarks</button>
          </Link>
          <Link to="/group-page">
            <button class="square-button">Groups</button>
          </Link>
          <Link to="/user-profile">
            <button class="square-button">Edit Profile</button>
          </Link>
          <Link to="/edit-properties">
            <button class="square-button">Edit Your Listings</button>
          </Link>
          <Link to="/messages">
            <button class="square-button">Messages</button>
          </Link>
          <Link to="/verification-page">
            <button class="square-button">Verification</button>
          </Link>
        </div>
        <div class="scrollable-container" id="middle-container">
          <div class="widget-post" aria-labelledby="post-header-title">
            <div class="widget-post__header"></div>
            <form
              id="widget-form"
              class="widget-post__form"
              name="form"
              aria-label="post widget"
            >
              <div class="widget-post__content">
                <label for="post-content" class="sr-only">
                  Share
                </label>
                <textarea
                  name="post"
                  id="post-content"
                  class="widget-post__textarea scroller"
                  placeholder="Create a post"
                  value={textInput}
                  onChange={handleInputChange}
                ></textarea>
               
              </div>
              <div
                class="widget-post__options is--hidden"
                id="stock-options"
              ></div>
              <div class="widget-post__actions post--actions">
                <div class="post-actions__attachments">
                  <input
                    type="file"
                    id="upload-image"
                    accept="image/*"
                    multiple
                  ></input>
                </div>
                <div class="post-stats-info">
                  <p>Max letters: 180</p>
                  <p>Letters : {textInput.length}</p>
                </div>

                <div class="post-actions__widget">
                  <button class="">Post</button>
                </div>
              </div>
            </form>

          </div>
          <div class="widget-post__actions post--actions" >
            <SinglePost></SinglePost>
            <SinglePost></SinglePost>
            <SinglePost></SinglePost>



          </div>
        </div>
        <div class="static-container even-spacing" id="right-container">
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
