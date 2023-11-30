const express = require('express');
const router = express.Router();
const comments = require('../services/comments');
module.exports = router;

//Test for getting all the info from the comment table
//And all comments with a particular post_id
router.get('/', async (req, res) =>{
    try {
        if(req.query.Post_ID){
            return res.json(await comments.getSpecificComments(req.query.Post_ID));
        }
        res.json(await comments.getComments(req.query.page));       
    } catch (error) {
        console.error('Error in testing getComments', error.message);
        res.status(500).send('Error accessing user account.');
    }
})

//to update the comments 
router.put('/:Post_ID', async (req, res, next) => {
    try {
        console.log ('The request body is ', req.body);
        console.log ("User_ID_Current: ", req.body.User_ID_Current);
        const result = await comments.updateComments(req.query.Post_ID, req.query.User_ID, req.body.User_ID_Current, req.body);
        res.json(result);
    } catch (error) {
        console.error('Error updating comments:', error.message);
        res.status(500).send('Error in updating comments!');
        next(error);
    }
});


//posting 
router.post('/:Post_ID', async (req, res, next) =>{
    try {
        res.json(await comments.postComment(req.query.Post_ID, req.body));
    } catch (error) {
        console.error("Error while creating a new post", error.message);
        next(error);
    }
});

//for deleting 
router.delete("/:Post_ID", async (req,res,next) =>{
    try {
        console.log ('The request body is ', req.body);
        console.log ("User_ID_Current: ", req.body.User_ID_Current);
            res.json(await comments.removeComments(req.query.Post_ID, req.query.User_ID, req.body.User_ID_Current, req.body));
    } catch (error) {
        console.error("Error in deleting a comment", error.message);
        next(error);
    }
})