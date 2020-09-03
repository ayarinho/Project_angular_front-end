import { Component, OnInit ,Input, Output  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import {  AuthenticationService } from '../../services/authentification.service'
import {  CategorieService } from '../../services/categorie.service';
import { HttpClient } from '@angular/common/http';

import { Employers } from '../../Employers';
import { Key } from 'protractor';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginForm1: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  username:string;
  password:string;
  liste:any;
  empl:Employers;
  k:any;
  q:any;
  arr = [];
  arry1=[];
  array2=[];
  pass:number;
 



  constructor(
    private http:HttpClient,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private categorie:CategorieService

  ) {
     
  }



  
/*  RechercherUsrename(){
    this.authenticationService.getusername().subscribe(
      data => {
     
      
     for(let key in data){
      if(data.hasOwnProperty(key)){
       this.arry1.push(data[key]);
   
     
        this.loginForm1 = this.formBuilder.group({
     
          username: [this.arry1, Validators.required],
          password: ['', Validators.required]
     
         });
      
       }
       console.log(this.loginForm1.value)
    }
  },);
 


  }*/




  RechercherPassword(){
   
    this.authenticationService.getpassword().subscribe(
      data => {
     
    console.log(data,"empthloye")
      
     for(let key in data){
      if(data.hasOwnProperty(key)){
       this.arr.push(data[key]);
      // console.log(data[key],"empthloye")
     
        this.loginForm1 = this.formBuilder.group({
          
       
          username: ['', Validators.required],
          password: [this.arr, Validators.required]
     
         });
      
       }
       console.log(this.loginForm1.value)
    }
  },);
 
//console.log(this.loginForm1.value)

  }

  getEmpbyID(password:number){
   // console.log(this.loginForm.value,"empthloye")

    this.categorie.getEmp(this.f.password.value).subscribe(data=>{
      console.log(data,"empthloye")
      
    }
      ); 

  }
  
  

  ngOnInit() {
   
    
    this.authenticationService.getusername().subscribe( res=> {
               
      console.log(res)
      this.authenticationService.getpassword().subscribe(
        data => {
       
     

      for(let key in data){
          this.arr.push(data[key])
          this.arr.push(res[key])
      }
    });
  });

  console.log(this.arr)

 
    this.loginForm = this.formBuilder.group({
        
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

  
 
   
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
}


// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }
get M() { return this.loginForm1.controls; }



onSubmit() {
 
  this.RechercherPassword();
 
   let password:number;
  this.getEmpbyID(password);

  console.log(this.arr)
 

    this.submitted = true;
    

    if (this.loginForm.invalid) {
    return;

    } else
    this.loading = true;
  

    
    this.authenticationService.login(this.f.username.value, this.f.password.value)
   
       
        .subscribe(
            data => {
           
            
        this.categorie.getEmp(this.f.password.value).subscribe(
          data => {

  
                if(this.f.username.value==data.username && this.f.password.value==data.password){
             
                  this.categorie.getEmp(this.f.password.value).subscribe(data=>{

                    console.log(data,"empthloye")

                    this.categorie.setdata(data);
               
                  });

                this.router.navigate(['/dashboard']);
 
                  
                } else
         
      
              console.log("Erreur")
            
            },
            error => {
              
                this.loading = false;
            });
            
          });
        
        }

        



}
