const bcrypt = require('bcrypt');
const saltRounds = 10;
const validateEmail= require('../service/validateEmail');
const adduser=require('../service/adduser');
    let registerRoute=async (request,response)=>{
    const userDetails=request.body;
    const email=userDetails.email
    userDetails.password=await bcrypt.hash(userDetails.password,saltRounds);
    console.log(userDetails.password);
    const validate= await validateEmail(email);
    if(validate)
    {
     adduser(userDetails);
     return response.status(200).send({message:"registered successfully"});   
    }
     
    response.status(406).send({message:"email already present"});
}
module.exports=registerRoute;