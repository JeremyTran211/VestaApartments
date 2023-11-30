
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = (props) => {
  const styles = {
    nav: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      height:'100%',
    }
  }
  return (
    <div style={styles.nav} >
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
      <Link to="/groups">
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
      <Link to="/verification">
        <button class="square-button">Verification</button>
      </Link>
    </div>
  )
};
export default Navigation;
