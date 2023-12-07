/* comments.js
* This file serves as functions to get, post, remove, and update comments associated with a post
* with error handling and also logging to determine sucess.
*
*
*/
const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// For retrieving comments.
async function getComments(page =1){
    // Calculate offset
    const offset = helper.getOffset(page, config.listPerPage);
    // Query database to retrieve comments.
    const rows = await db.query(
        `SELECT Comment_ID, User_ID, Post_ID, Text, Timestamp FROM
        Comments`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };
    return {
        data, meta
    }
}

//For retrieving specific comments associated with a post.
async function getSpecificComments(Post_ID){
    page =1;
    // Calculate the offset.
    const offset = helper.getOffset(page, config.listPerPage);
    //Query database to retrieve comments for a specific post.
    const rows = await db.query(
        `SELECT Comment_ID, User_ID, Post_ID, Text, Timestamp FROM
        Comments WHERE Post_ID = ?`, [Post_ID])
    const data = helper.emptyOrRows(rows);
    const meta = { page };
    return {
        data, meta
    }
}

//For posting a comment.
async function postComment(Post_ID, comments){
    const formattedTimestamp = new Date(comments.Timestamp).toISOString().slice(0, 23).replace("T", " ");
    let current_ID = comments.User_ID_Current;
    let post_id = comments.User_ID; 
     let message = "";
    // Check if the current user matches the commenter before posting the comment.
    if (current_ID == post_id) {
        //Execute database query to insert new comment.
        const result = await db.query(
            `Insert INTO Comments (User_ID, Post_ID, Text,
                Timestamp, Like_Counter) 
            VALUES (?,?, ?, ?, ?)`, [comments.User_ID, comments.Post_ID, comments.Text,
        comments.Timestamp, comments.Like_Counter]
        );
        //Check affected rows to determine success or fail.
        if (result.affectedRows) {
            message = `Posted a comment successfully`;
        }
    }else {
        console.log("Error in deleting comment");
        message = "Current_User_ID and User_ID do not match";
    }
    return { message };
}

//remove works, but deletes all comments associated with a post_id instead of
//a single comment
async function removeComments(Post_ID, User_ID, User_ID_Current, comments){
    let current_ID = comments.User_ID_Current;
    let post_id = comments.User_ID; 
    let message = "";
    // Check if the current user matches the commenter before removing the comment.
    if (current_ID == post_id) {
    //Check the affected row to determine success or fail.
    const result = await db.query(`DELETE FROM Comments 
    WHERE Post_ID = ?`, [comments.Post_ID]);
        if(result.affectedRows){
            message = `Removed a comment successfully`;
        }
    }else{
        message = "Current_User_ID and User_ID do not match";
    }
    return {message}
}
//For updating a comment.
async function updateComments(Post_ID, User_ID, User_ID_Current, comments) {
    let current_ID = comments.User_ID_Current;
    let post_id = comments.User_ID; 
    let message = "";
    // Check if the current user matches the commenter before updating the comment text.
    if (current_ID == post_id) {
        const result = await db.query(`UPDATE Comments 
        SET Text= '${comments.Text}'
        WHERE Post_ID = ${comments.Post_ID}`);
        //Check the affected rows to determine success or fail.
        if (result.affectedRows) {
            message = `Updated a comment successfully`;
        }
    }else{
        message = "Current_User_ID and User_ID do not match";
    }
    
    return { message }
}

module.exports = {
    getComments,
    getSpecificComments,
    postComment,
    removeComments,
    updateComments

  };