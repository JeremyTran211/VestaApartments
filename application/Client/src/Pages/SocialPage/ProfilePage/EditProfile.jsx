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
  const status = "Pending";
  const level = "Low" ;
  // Use state hook to store the driver's license number
  const [license, setLicense] = useState("");

  // Use state hook to store the visibility of the popout form
  const [visible, setVisible] = useState(false);

  // Handle the change of the input field
  const handleChange = (event) => {
    // Get the input value
    const value = event.target.value;
    // Update the state with the new value
    setLicense(value);
  };

  // Handle the submit of the form
  const handleSubmit = (event) => {
    // Prevent the default browser behavior
    event.preventDefault();
    // Do something with the license number, for example, send it to a server
    console.log(license);
    // Hide the popout form
    setVisible(false);
  };

  // Handle the click of the button that shows the popout form
  const handleClick = () => {
    // Toggle the visibility of the popout form
    setVisible(!visible);
  };

  
  function getDetails() {
    var major = document.getElementById("major");
    var year  = document.getElementById("year");
    var about = document.getElementById("about");
    var twitter  = document.getElementById("twitter");
    var facebook = document.getElementById("facebook");
    var instagram  = document.getElementById("instagram");
    window.alert("Value = " + "'" + major.value + "'");
    window.alert("Value = " + "'" + year.value + "'");
    window.alert("Value = " + "'" + about.value + "'");
    window.alert("Value = " + "'" + twitter.value + "'");
    window.alert("Value = " + "'" + facebook.value + "'");
    window.alert("Value = " + "'" + instagram.value + "'");
  }

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
                    <Link to="https://twitter.com"><input placeholder="@Joeiscool" id="twitter" /></Link>
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
                    <Link to="https://instagram.com"><input placeholder="@Joeiscool" id="instagram"/></Link>
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
                    <Link to="https://facebook.com"><input placeholder="@Joeiscool" id="facebook"/></Link>
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
                  <div class="col-sm-9 text-secondary"><input placeholder="E.G. Computer Science" id="major"/> </div>
                </div>
                <hr></hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Year</h6>
                  </div>
                  <div class="col-sm-9 text-secondary"><input placeholder="E.G. Senior" id="year"/></div>
                </div>
                <hr></hr>
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">About</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                  <input placeholder="E.G. Hello I am me" id="about" />
                  </div>
                </div>
                <hr></hr>
                <div class="row">
                  <div class="col-sm-12">
                    <a class="btn btn-info " target="__blank">
                      <Link to="" onClick={getDetails}>Submit</Link>
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
                  
                  <i class="material-icons text-info mr-2"></i>You Haven't Taken
                  the Personality Test
                </h6>
                <div
                    style={{
                      margin: "20px",
                      padding: "20px",
                      border: "1px solid black",
                      borderRadius: "10px",
                      fontFamily: "Arial",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: status === "Passed" ? "green" : "red",
                      }}
                    >
                      Background Check Status: {status}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "blue",
                      }}
                    >
                      Verification Level: {level}
                    </p>
                  </div>
                <div class="button-holder">
                  <Link to="/personality-test">
                    <button class="btn btn-outline-primary">
                      <a>Take Personality Test</a>
                    </button>
                  </Link>
                </div>

                  <div>
                    <button
                      style={{
                        // position: "absolute",
                        top: "10px",
                        right: "10px",
                        width: "200px",
                        height: "40px",
                      }}
                      onClick={handleClick}
                    >
                      Verification Form
                    </button>
                    <form
                      style={{
                        top: "60px",
                        right: "10px",
                        width: "300px",
                        height: "200px",
                        border: "1px solid black",
                        borderRadius: "10px",
                        backgroundColor: "white",
                        display: visible ? "block" : "none",
                      }}
                      onSubmit={handleSubmit}
                    >
                      <p>Please enter your driver's license number:</p>
                      <input
                        type="text"
                        value={license}
                        onChange={handleChange}
                        style={{
                          margin: "20px",
                          width: "150px",
                          height: "20px",
                        }}
                      />
                      <button
                        type="submit"
                        style={{
                          margin: "20px",
                          width: "100px",
                        }}
                      >
                        Submit
                      </button>
                    </form>
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
