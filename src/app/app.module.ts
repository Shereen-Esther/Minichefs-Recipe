import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { RandomComponent } from './random/random.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { RecipeComponent } from './recipe/recipe.component';
import { UserComponent } from './user/user.component';
import { FoodsComponent } from './foods/foods.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { CookieService} from 'ngx-cookie-service';
import { FooterComponent } from './footer/footer.component'




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    RandomComponent,
    CategoriesComponent,
    HomePageComponent,
    RecipeComponent,
    UserComponent,
    FoodsComponent,
    SignupComponent,
    LoginComponent,
    AddRecipeComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
