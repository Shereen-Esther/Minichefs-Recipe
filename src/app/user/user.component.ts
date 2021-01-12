import { Component, OnInit } from '@angular/core';
import { CookieService} from 'ngx-cookie-service';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: any ;
  email: any;
  myRecipes: any;
  whish :any;
  constructor(private cookies: CookieService,private api: ApicallService) { }

 renderWelcomeMsg = (currentTime = new Date()) => {
    const currentHour = currentTime.getHours()
    const splitAfternoon = 12; // 24hr time to split the afternoon
    const splitEvening = 17; // 24hr time to split the evening
  
    if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
      // Between 12 PM and 5PM
      return 'Good afternoon';
    } else if (currentHour >= splitEvening) {
      // Between 5PM and Midnight
      return 'Good evening';
    }
    // Between dawn and noon
    return 'Good morning';
  }
   
  ngOnInit(): void {
   this.user  =  this.cookies.get('user')
   this.email = this.cookies.get('email')
   this.whish = this.renderWelcomeMsg();
   this.api.getMyrecipe(this.email).subscribe((data)=>{
     this.myRecipes = data;
     
   })

  }

}
