import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Notifications/NotificationsPage.css";
import { useState } from "react";

const BookmarksPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  return (
    <div class="container-fluid-text-center">
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-sm-offset-3">
          <div class="new-message-box">
            <div class="new-message-box-alert">
              <div class="info-tab tip-icon-alert" title="error">
                <i></i>
              </div>
              <div class="tip-box-alert" id="friend-request">
                <p>123 Example St, Example City, EX 12345</p>
                <p>$1000 A month </p>
                <p>2 Bed 1 Bath </p>
                <p>
                  Click here to
                  {/* take to user page */}
                  <a class="btn btn-sm" >
                    {" "}
                    <Link to="/listing-details">view</Link>
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
            <div class="new-message-box-alert">
              <div class="info-tab tip-icon-alert" title="error">
                <i></i>
              </div>
              <div class="tip-box-alert" id="group-invite">
                {/* take to groups page */}
                <p>123 Example St, Example City, EX 12345</p>
                <p>$1000 A month </p>
                <p>2 Bed 1 Bath </p>
                <p>
                  Click here to
                  <Link to="/listing-details"><a class="btn-btn-sm" >
                    {" "}
                    view
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

export default BookmarksPage;
