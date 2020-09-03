import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employers } from '../Employers';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  
    constructor(private http: HttpClient) {
      
    }


    
    login(username: string, password: string) {
        return this.http.post("http://localhost:8084/authentification/"+username+"/"+password,{username,password});

    

      }
 

    getpassword(){
        return this.http.get("http://localhost:8084/getPassword"); 
    }

    
    getusername(){
        return this.http.get("http://localhost:8084/getUsername"); 
    }

    
}