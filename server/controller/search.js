const getByName=require('../service/recipeName');
let searchRoute=async(request,response)=>{
    let name=request.query.search;
    let items= await getByName(name);
    if(!items){
        return response.status(406).send({message:"item not present"});
    }
    response.send(items);
}
module.exports=searchRoute;
