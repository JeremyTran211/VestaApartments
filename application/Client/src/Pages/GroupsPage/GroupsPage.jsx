import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Notifications/NotificationsPage.css";
import { useState } from "react";

const GroupsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  return (
    <div class="container-fluid-text-center">
      <Link to="/">
        <button class="button-35">BACK</button>
      </Link>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3">
          <div class="new-message-box">
            <div class="new-message-box-alert">
              <div class="info-tab tip-icon-alert" title="error">
                <i></i>
              </div>
              <div class="tip-box-alert" id="friend-request">
                <p>Group: Joes Friends!</p>
                <p>Not Joe, Not Not Not Joe, Ted</p>
                <p>
                  Click here to
                  {/* take to user page */}
                  <a class="btn btn-sm" >
                    {" "}
                    <Link to="/messages">chat</Link>
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
                <p>Group: Joes School Friends!</p>
                <p>Not Joe, Not Not Not Joe, Ted</p>
                <p>
                  Click here to
                  <Link to="/messages"><a class="btn-btn-sm" >
                    {" "}
                    chat
                  </a></Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default GroupsPage;
