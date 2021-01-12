import { Component, OnInit  } from '@angular/core';
import { ApicallService } from '../apicall.service'
// import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {

 constructor(private api: ApicallService){

}
recipe: any;
type: any;

ngOnInit(){
  this.api.getRandomData().subscribe((data)=>{
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

