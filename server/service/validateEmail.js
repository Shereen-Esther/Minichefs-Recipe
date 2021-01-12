const db=require('./db');
/**
 * @param {*it comes from the register route} mail 
 * This function check Whether the given mail is present in database
 * if the mail is not present in database then return true
 * else return false
 */
async function validateEmail(mail){

    let snapshot=await db.collection("users").where('email','==',mail).get();
 if(snapshot.empty){
     return true;
     
 }

 return false;
}
module.exports = validateEmail;