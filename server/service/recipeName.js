const db=require('./db');
/**
 * The funcion get the recipes by its name
 * if no recipe name is found then it return null
 * @param {*} name 
 */
async function getByName(name){
    let snapshot= await db.collection("recipes").where('name','==',name).get();
    let items=[];
    if(snapshot.empty){
        return null;
    }
    snapshot.forEach((docs)=>{
       
        items.push(docs.data());
        
    });
    return items[0];
}

module.exports=getByName;