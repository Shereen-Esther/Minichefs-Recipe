const getRandomRecipe=require('../service/randomRecipes');
let getbyidRoute=async(request,response)=>{
    let name=request.params.id;
    console.log(request.params.id)
    let items= await  getRandomRecipe(Number(name));
    if(!items)
    {
     return response.status(406).send({message:"item not present"});
    }
    response.send(items);

    

}

module.exports=getbyidRoute;