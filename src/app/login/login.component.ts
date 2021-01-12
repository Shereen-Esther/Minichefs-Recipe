import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApicallService } from '../apicall.service'
import { CookieService} from 'ngx-cookie-service'
import {Router} from "@angular/router"



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApicallService,private cookies: CookieService,private router: Router) { }

  userData: any ={ };
  ngOnInit(): void {
  }



  doLogin(loginForm: NgForm)
  {  
    this.userData.email = loginForm.value.email
    this.userData.password = loginForm.value.password

    this.api.login(this.userData).subscribe(data=>{
      this.userData = data;
      console.log(data);
      
       this.cookies.set('email',this.userData.email);
       this.cookies.set('user',this.userData.name);
       this.router.navigate(['/user']);
       
       
    },(err=>{
      alert('invalid user or password')
    }))

  }

}
