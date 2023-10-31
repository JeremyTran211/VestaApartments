import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ViewProfile.css";
import { useState } from "react";
import Pfp from "../ProfilePage/pfp.jpg";

const EditProfile = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearchClick = () => {
    console.log("Search button was clicked with query:", searchInput);

    if (searchInput) {
      navigate("/listings", { state: { searchQuery: searchInput } });
    }
  };
  return (
    <div>
      <div class="main-body">
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src={Pfp}
                    alt="Admin"
                    class="rounded-circle"
                    width="150"
                  ></img>
                  <div class="mt-3">
                    <h4>VeryCoolJoe</h4>
                    <p class="text-secondary mb-1">Joe</p>
                    <p class="text-muted font-size-sm">
                      I enjoy being joe and being a cool joe
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>

            <div class="card mt-3">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-twitter mr-2 icon-inline text-info"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                    Twitter
                  </h6>
                  <span class="text-secondary">
                    <Link to="https://twitter.com">@JoeIsCoolTwitter</Link>
                  </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-instagram mr-2 icon-inline text-danger"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Instagram
                  </h6>
                  <span class="text-secondary">
                    <Link to="https://instagram.com">@JoeIsCoolInstagram</Link>
                  </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 class="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-facebook mr-2 icon-inline text-primary"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Facebook
                  </h6>
                  <span class="text-secondary">
                    <Link to="https://facebook.com">@JoeIsCoolFacebook</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-8">
            <div class="card mb-3">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">First Name</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">JOE</div>
                </div>
                <hr></hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">School</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">SFSU</div>
                </div>
                <hr></hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Major</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">Computer Science</div>
                </div>
                <hr></hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Year</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">Junior</div>
                </div>
                <hr></hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">About</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    I am Joe. I really like being Joe. Joe is super cool. This
                    about section is all about Joe. Joe wants to know what his
                    about section looks with multiple lines so Joe is writing
                    about Joe and how cool Joe is. Joe is simply being Joe. Fun
                    fact, Joe is named Joe because he named himself Joe! Joe's
                    story as to how exactly he became Joe really starts with his
                    parents, Joe and Joe, who then spawned a new Joe. Then the
                    new Joe became Joe. The end.
                  </div>
                </div>
                <hr></hr>
                <div class="row">
                  <div class="col-sm-12">
                    <a class="btn btn-info " target="__blank">
                      <Link to="/under-construction">Edit</Link>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card h-100">
              <div class="card-body">
                <h6 class="d-flex align-items-center mb-3">
                  <i class="material-icons text-info mr-2"></i>You Haven't Taken the Personality Test
                </h6>
                
                <div class="button-holder">
                  <button class="btn btn-outline-primary">
                    <Link to="/personality-test"><a>Take Personality Test</a></Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
