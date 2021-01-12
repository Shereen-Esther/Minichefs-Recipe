import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import {ActivatedRoute,Router,ParamMap} from '@angular/router'
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  
  constructor(private api: ApicallService,private router: Router,private route: ActivatedRoute){

  }
  recipe: any;
  type: any;
  recipeId: any;
  ngOnInit() {
    
    this.route.paramMap.subscribe(param=>{
      this.recipeId = param.get('id')
    });

    
    console.log(this.recipeId);
    
    this.api.getFoodData(this.recipeId).subscribe((data)=>{
      this.recipe = data
      if((this.recipe.type).toLowerCase()==='veg')
      {
       this.type = 'green';
      }
     else
      {
       this.type = 'red';
      }
    })
  }


}
