const getRandomRecipe=require('../service/randomRecipes');
const recipeId =56;

let randomRoute=async (request,response)=>{
    let randomId=Math.floor(Math.random() * (recipeId - 1) + 1);
    let recipe= await getRandomRecipe(randomId);
    response.send(recipe);
 }

 module.exports=randomRoute;
