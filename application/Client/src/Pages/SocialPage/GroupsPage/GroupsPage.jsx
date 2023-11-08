import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useState } from "react";

const SingleGroup = () => {
  return (
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
                <a class="btn btn-sm">
                  {" "}
                  <Link to="/messages">chat</Link>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const GroupsPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  return (
    <div class="container-fluid-text-center">
      <Link to="/">
        <button class="button-35">BACK</button>
      </Link>
      <SingleGroup />
      <SingleGroup />
      <SingleGroup />
      <SingleGroup />
      <SingleGroup />
    </div>
  );
};

export default GroupsPage;
