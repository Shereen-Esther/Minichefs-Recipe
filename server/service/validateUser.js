const db=require('./db');
const bcrypt = require('bcrypt');
/**
 * 
 * @param {*it comes from the authenticate route} mail 
 * It check whether the given mail is present in database
 * if present then return the password of the corresponding email
 * else return null 
 */
async function validateUser(user){
    let mail=user.email;
    let snapshot=await db.collection("users").where('email','==',mail).get();
    if(snapshot.empty){
        return null;
    }
    let userData=snapshot.docs[0].data();
    let valid= await bcrypt.compare(user.password, userData.password);

    if(valid){
        return userData;
    }
    return valid;
}
 module.exports = validateUser;