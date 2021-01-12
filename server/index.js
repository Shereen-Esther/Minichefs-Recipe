const express= require('express');
const app = express();
const port=5000;
const cors=require('cors');
const registerRoute = require('./controller/registerController');
const authenticateRoute = require('./controller/authenticateController');
const addrecipeRoute = require('./controller/addrecipeController');
const randomRoute = require('./controller/randomRecipeController');
const categoryRoute = require('./controller/categoriesController');
const searchRoute = require('./controller/search');
const myrecipeRoute = require('./controller/myRecipeController');
const getbyidRoute = require('./controller/getbyIdcontroller');


app.use(express.json());
app.use(cors());
/**
 * handling the resgistration route
 * validate wether a email is already present.
 * Stores the details if it is a new email.
 */
app.post('/register',registerRoute);
/**
 * handling the login route 
 * validate the email if it is present in the database
 * if not then return invalid user name
 * if username is valid then validate the password
 * return token if valid
 * else return invalid password
 */
app.post('/authenticate',authenticateRoute);
/**
 * This router allows user to add their own recipes in the data base
 */

app.post('/addrecipe',addrecipeRoute);
/**
 * Generate a random number.
 * find the recipe by the generated random number. 
 */

app.get('/random',randomRoute);
/**
 * get the value of category from the query parameter
 * If the category is present return a list.
 * else return category does not present.
 */

app.get('/categories',categoryRoute);
/**
 * Find the recipe by the value given in search query
 * if recipe is found return a list
 * else return item not found
 */

app.get('/search',searchRoute);


/**
 * To fetch the recipe of a particular user
 */

app.get('/myrecipe/:id',myrecipeRoute);

/*
 * It find the dish based on the name given in the route
 * if the item present then return the item
 * else return item not found
 */

app.get('/:id',getbyidRoute);

app.listen(port,()=>{
    console.log(`server is running on the port ${port}`);
    });

     
 