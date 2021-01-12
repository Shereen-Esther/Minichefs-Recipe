const db=require('./db');
/**
 * This function Get all the recipes wich matches  the given category 
 * if category present retun a list og categories
 * else return null.
 * @param {*fromt the categories route} category 
 */

async function getByCategory(category){
    let snapshot= await db.collection("recipes").where('category','==',category).get();
    let items=[];
    if(snapshot.empty){
        return null;
    }
    snapshot.forEach((docs)=>{
       
        items.push(docs.data());
        
    });
    return items;
}
module.exports =getByCategory;