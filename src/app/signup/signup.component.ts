import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApicallService } from '../apicall.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private api: ApicallService) { }
 
  signUpData:any = {}
  ngOnInit(): void {
  }

  signup(signupForm: NgForm)
  {
    this.signUpData.name =  signupForm.value.name;
    this.signUpData.email =  signupForm.value.email;
    this.signUpData.password =  signupForm.value.password;

    this.api.getSignUp(this.signUpData).subscribe(data=>{
      alert('Now login')
    },(err=>{
      alert('Already Exists')
    }))
    

  }
  
  
}
