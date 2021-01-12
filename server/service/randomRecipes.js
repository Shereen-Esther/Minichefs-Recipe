const db=require('./db');
/**
 * Fetch the recipe from the  database using the given id.
 * @param {*} id 
 */

async function getRandomRecipe(id){
    let snapshot=await db.collection("recipes").where('item_id','==',id).get();
    if(snapshot.empty){
        return null;
    }
    let recipe=snapshot.docs[0].data();
    return recipe;
}

module.exports =getRandomRecipe;
 