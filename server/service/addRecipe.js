const db=require('./db');
let recipeId=70;
/**
 * user can add their own recipes using this function
 * @param {*from the addrecipe route} recipe 
 */

function addRecipe(recipe){
    recipe.item_id= recipeId;
    recipeId++;
   
    db.collection("recipes").add(recipe);
}

module.exports=addRecipe;
