const db=require('./db');
/**
 * 
 * @param {*} userDetails 
 * This function add the userDeatils in the database.
 */

function adduser(userDetails){
    console.log(userDetails);
    db.collection("users").add(userDetails);
}
module.exports = adduser;