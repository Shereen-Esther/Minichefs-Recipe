import { Component, OnInit } from '@angular/core';
import { CookieService} from 'ngx-cookie-service'
import {Router} from "@angular/router"
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any ;
  color: boolean = true;
  


  constructor(private cookies: CookieService,private router: Router) { }

  
  ngOnInit(): void {
     this.color = ((this.router.url)==='/') ? false : true; 
    this.user  =  this.cookies.get('user')
    console.log(this.user)
  }
  logout()
  {
    this.cookies.deleteAll();
    if((this.router.url)==='/')
    {
      window.location.reload();
    }
    else{
      this.router.navigate(['/']);
    }
    
  }

}
