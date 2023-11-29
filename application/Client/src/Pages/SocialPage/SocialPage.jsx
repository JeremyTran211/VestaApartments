import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./SocialPage.css";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import NotificationEmbed from "./Notifications/Notifications.jsx";
import GroupEmbed from "./GroupsPage/GroupsPage.jsx";
import BookMarksEmbed from "./Bookmarks/BookmarksPage.jsx";

import NavigationEmbed from "./Navigation.jsx";
const SinglePost = ({
  imageurl,
  content, 
  likes
}) => {
  return (
    <div className="single-post" >
      <div class="post-actions__attachments">
        {imageurl && <img src={imageurl} alt="Post" />}
        <p>@JoeIsCool</p>
      </div>
      <p>{content}</p>
      <div className="like-icon-wrapper">
        <ThumbUpIcon className="like-icon" />
          <div>{likes}</div>
      </div>
    </div>
  );
};


function SocialPage() {
  const [textInput, setTextInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const reponse = await fetch ('/post');
      const data = await reponse.json();
      console.log(data);
      setPosts(data.data);
    } catch (error) { 
      console.error('Error fetching post: ', error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try{
      const reponse = await fetch('/post', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: textInput,
        }),
      });
  
      if(reponse.success){
        const newPost = await reponse.json();
        setPosts([...posts, newPost]);
        setTextInput('');
  
      } else {
          console.error('Server has returned an error')
      }
    } catch(error) {
      console.error('Error submitting post: ', error);
    }
  }
  
  const handleInputChange = (event) => {
    let value= event.target.value
    if(value.length>180){
      return;
    }
    setTextInput(event.target.value);
  };

  return (
    <div className="social-page">
      <h2>Social Page</h2>

      {/* Add photo links button links and nav bar at the top */}

      <div class="container2">
        <div class="static-container even-spacing" id="left-container">
          <NavigationEmbed></NavigationEmbed>
        </div>
        <div class="scrollable-container" id="middle-container">
          <div class="widget-post" aria-labelledby="post-header-title">
            <div class="widget-post__header"></div>
            <form
              id="widget-form"
              class="widget-post__form"
              name="form"
              aria-label="post widget"
              onSubmit = {handleSubmit}
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
                {posts.map(post => (
                  <SinglePost 
                  key = {post.id}
                  content = {post.Post_Content}
                  likes = {post.Like_Counter}
                  />
                ))}
          </div>
        </div>
        <div class="static-container even-spacing" id="right-container">
          {/* <NotificationEmbed></NotificationEmbed> */}
          {/* <GroupEmbed></GroupEmbed> */}
            <BookMarksEmbed></BookMarksEmbed>
        </div>
      </div>

      {/* For now links, later implement */}
    </div>
  );
}

export default SocialPage;