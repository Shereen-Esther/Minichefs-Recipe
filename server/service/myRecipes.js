const db=require('./db');
/**
 * this function return all the recipes added by a particular user
 * if no recipe is added then return null
 * @param {*} id 
 */
async function getMyRecipes(id){
    let snapshot= await db.collection("recipes").where('owner_id','==',id).get();
    let items=[];
    if(snapshot.empty){
        return null;
    }
    snapshot.forEach((docs)=>{
       
        items.push(docs.data());
        
    });
    return items;
}

module.exports=getMyRecipes;