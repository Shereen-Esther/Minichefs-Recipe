import { NgModule } from '@angular/core';
import { Routes ,RouterModule } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { FoodsComponent } from './foods/foods.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RandomComponent } from './random/random.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  {
    path: '',
    component : HomePageComponent
  }
  ,
  {
    path: 'login',
    component : LoginComponent
  }
  ,
  {
    path: 'sign-up',
    component : SignupComponent
  }
  ,
  {
    path: 'food/:id',
    component : RecipeComponent
  }
  ,
  {
   path : "categories/:food",
   component : FoodsComponent
  },
  {
    path : "addrecipe",
    component : AddRecipeComponent
   },
   {
    path : "user",
    component : UserComponent
   }
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
