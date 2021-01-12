import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {Router} from "@angular/router"
import { ApicallService } from '../apicall.service'
@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  constructor(private router: Router,private api: ApicallService) { }

  name: string;
  foods: any;
  ngOnInit(): void {

      this.name = String((this.router.url).split('/')[2]);
      this.name = this.name.replace('-',' ')
      this.api.getCatRecipe(this.name).subscribe((data)=>{
        this.foods = data
      });

  }
   

  customOptions: OwlOptions = {
    loop: true,
    dots : false,
    mouseDrag: true,
    autoplay:true,
    autoplayTimeout : 100,
    touchDrag: false,
    pullDrag: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

}
