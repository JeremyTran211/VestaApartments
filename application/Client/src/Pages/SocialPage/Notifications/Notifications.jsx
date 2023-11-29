import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NotificationsPage.css";
import { useState } from "react";

const NotificationsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  return (
    <div class="">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3">
          <div class="new-message-box">
            <div class="new-message-box-alert">
              <div class="info-tab tip-icon-alert" title="error">
                <i></i>
              </div>
              <div class="tip-box-alert" id="friend-request">
                <p>Notification: A new friend request!</p>
                <p>
                  Click here to
                  {/* take to user page */}
                  <a class="btn btn-sm" >
                    {" "}
                    <Link to="/view-profile">view</Link>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3">
          <div class="new-message-box">
            <div class="new-message-box-danger">
              <div class="info-tab tip-icon-danger" title="error">
                <i></i>
              </div>
              <div class="tip-box-danger" id="group-invite">
                {/* take to groups page */}
                <p>Notification: A new group invite has popped up!</p>
                <p>
                  Click here to
                  <Link to="/group-page"><a class="btn-btn-sm" >
                    {" "}
                    view
                  </a></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3">
          <div class="new-message-box">
            <div class="new-message-box-success">
              <div class="info-tab tip-icon-success" title="success">
                <i></i>
              </div>
              <div class="tip-box-success" id="new-message" >
                <p>Notification: A new message has popped up!</p>
                <p>
                  Click here to
                  {/* take to messages page */}
                  <a class="btn btn-sm" >
                    {" "}
                    <Link to="/messages">view</Link>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3">
          <div class="new-message-box">
            <div class="new-message-box-warning">
              <div class="info-tab tip-icon-warning" title="error">
                <i></i>
              </div>
              <div class="tip-box-warning" id="new-post">
                <p>Notification: A new post has popped up!</p>
                <p>
                  Click here to
                  {/* take to social page */}
                  <a class="btn btn-sm" >
                    {" "}
                    <Link to="/social">view</Link>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3">
          <div class="new-message-box">
            <div class="new-message-box-info">
              <div class="info-tab tip-icon-info" title="error">
                <i></i>
              </div>
              <div class="tip-box-info" id="new-listing">
                <p>Notification: A new listing has popped up!</p>
                <p>
                  Click here to
                  {/* take to listings page */}
                  <a class="btn btn-sm" >
                    {" "}
                    <Link to="/listings">view</Link>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;
