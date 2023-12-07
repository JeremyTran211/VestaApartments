/* post.js
* this file serves as a function to create, get, update, and delete a post.
*
*/
const db = require('./db');
const helper = require('../helper');
const config = require('../config');


// For creating a post.
async function createPost(post) {
    console.log(post);
    const result = await db.query(
        `INSERT INTO Posts (User_ID, Post_Content) 
        VALUES ("${post.User_ID}", "${post.content}")`);
    //Message to determine success or fail.
    let message = 'Error in creating post';
    //Check affected rows.
    if (result.affectedRows) {
        message = 'Post created successfully';
    }
    return {
        message,
        success: true
    };
}

// For retrieving and reading the posts in the posts Table.
async function getPosts(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    // Query to select post from Posts Table.
    const rows = await db.query(
        `SELECT Posts_ID, User_ID,Post_Content, Like_Counter
    FROM Posts LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    const meta = { page };
    return {
        data,
        meta
    }
}

// For updating post and gives status of operation.
async function updatePost(post_id, post) {
    // Query to update a post in Post table.
    const query = `UPDATE Posts SET  
    User_ID =IF("${post.User_ID}" = "undefined", User_ID, "${post.User_ID}"), 
    Post_Content =IF("${post.Post_Content}" = "undefined", Post_Content, "${post.Post_Content}") 
    WHERE Posts_ID = ${post_id} `
    // Message to determine success or fail.
    let message = 'Error in updating post';
    const result = await db.query(query)
    // Check affeted rows.
    if (result.affectedRows) {
        message = 'Post updated successfully';
    }
    return { message };
}

// For deleting a post.
async function removePost(post_id) {
    // Query to remove a post from Post Table
    const result = await db.query(
        `DELETE FROM Posts WHERE Posts_ID=${post_id}`
    );
    // message to determine success or fail.
    let message = 'Error in deleting post';
    // Check affected rows.
    if (result.affectedRows) {
        message = 'Post was deleted successfully';
    }

    return { message };
}


module.exports = {
    getPosts,
    updatePost,
    removePost,
    createPost
}
