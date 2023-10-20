const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getUsers(page = 1){
    const offset = helper.getOffset(page, config.listPerPage);







}