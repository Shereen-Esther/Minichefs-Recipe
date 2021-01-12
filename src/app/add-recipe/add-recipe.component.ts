import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApicallService } from '../apicall.service'
import { CookieService} from 'ngx-cookie-service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  constructor(private api: ApicallService,private cookies: CookieService,private router: Router) { }

  newRecipe:any = {};
  msg:any = {};
  ngOnInit(): void {
  }
  addRecipe(addRecipeForm: NgForm)
  {   
    this.newRecipe.owner_id = this.cookies.get('email');
    this.newRecipe.name  =  addRecipeForm.value.name;
    this.newRecipe.type  =  addRecipeForm.value.type;
    this.newRecipe.ingredients  =  addRecipeForm.value.ingredients;
    this.newRecipe.picture  =  addRecipeForm.value.picture;
    this.newRecipe.category  =  addRecipeForm.value.category;
    this.newRecipe.steps  =  addRecipeForm.value.steps;
    this.newRecipe.description  =  addRecipeForm.value.description;

    this.api.addNewRecipe(this.newRecipe).subscribe(data=>{ 
      alert('Recipe Added')
      this.router.navigate(['/user']);
    },(err=>{
      alert('Already Exists')
    }))

  }



}
