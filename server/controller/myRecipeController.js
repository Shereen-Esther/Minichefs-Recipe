const getMyRecipes=require('../service/myRecipes');
let myrecipeRoute=async (request,response)=>{
    let email=request.params.id;   
    let myRecipes=await getMyRecipes(email);
    if(myRecipes){
    return response.status(200).send(myRecipes);
}
response.status(403).send({message:"no recipes"});
}

module.exports=myrecipeRoute;