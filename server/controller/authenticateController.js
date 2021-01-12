const validateUser=require('../service/validateUser');
const getMyRecipes=require('../service/myRecipes');
let authenticateRoute=async (request,response)=>{
    let user = request.body;
    let validatedUser= await validateUser(user);
   
    /**
     * validate the password
     * add the user recipes along with user details
     */
    
    if(validatedUser){
        
        delete validatedUser.password;
        validatedUser.myRecipes=await getMyRecipes(validatedUser.email)
        response.cookie('user',validatedUser,{});
        return response.status(200).send(validatedUser);
    }
    
    response.status(403).send({message:"invalid username/password"});
}
module.exports=authenticateRoute;