
const getByCategory=require('../service/categories');
let categoryRoute=async(request, response)=>{
    let category=request.query.category;
    let items=await getByCategory(category);
    if(!items){
        return response.status(406).send({message:"category does not present"});
    }
    response.send(items);
}
module.exports=categoryRoute;
