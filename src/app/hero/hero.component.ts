import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from "@angular/router"
import { ApicallService } from '../apicall.service'


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(private router: Router,private api: ApicallService) { }

  item: any;
  ngOnInit(): void {
  }
  
  search(searchForm: NgForm)
  {
    // console.log(searchForm.value.search);
    this.api.getSearchByName(searchForm.value.search).subscribe((data)=>{
        this.item = data;
        this.router.navigate([`/food/${this.item.item_id}`])
    })
    
  }


}
