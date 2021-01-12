import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }
   getRandomData ()
   {   
     return this.http.get('http://localhost:5000/random');
   }
   getFoodData(id: number)
   {
     return this.http.get(`http://localhost:5000/${id}`);
   }
   getSignUp(user: any)
   {
     return this.http.post(`http://localhost:5000/register`,user,{
        headers : new HttpHeaders({
            'Content-Type' : 'application/json'
        })
     })
   }
   addNewRecipe(recipe: any)
   {
    return this.http.post(`http://localhost:5000/addrecipe`,recipe,{
      headers : new HttpHeaders({
          'Content-Type' : 'application/json'
      })
   })
   }
   login(credential: any)
   {
    return this.http.post(`http://localhost:5000/authenticate`,credential,{
      headers : new HttpHeaders({
          'Content-Type' : 'application/json'
      })
   })
   }
   getCatRecipe(food: string)
   {   
     return this.http.get(`http://localhost:5000/categories?category=${food}`);
   }

   getSearchByName(name: string)
   {
    return this.http.get(`http://localhost:5000/search?search=${name}`); 
   }

   getMyrecipe(email: string)
   {
    return this.http.get(`  http://localhost:5000/myrecipe/${email}`); 
   }

 
}


