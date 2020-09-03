import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { Employers } from '../../Employers';
import { HttpClient } from '@angular/common/http';
import { CategorieService } from '../../services/categorie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private http:HttpClient,private categorie:CategorieService,
  private router:Router,private formbuilder:FormBuilder) { }
  employe:Employers;

  form: FormGroup;
  employeedetails:FormGroup;
  Emp:any;
  youssef=this.categorie.emp;
  variable:any;





getSelectedOptionText(event: Event) {
  let selectedOptions = event.target['options'];
  let selectedIndex = selectedOptions.selectedIndex;
  let selectElementText = selectedOptions[selectedIndex].text;
  console.log(selectElementText)

  this.variable=selectElementText;
}

  addemployer(id:number){

  
   
    //console.log(this.employeedetails);
  

   /*this.Emp=new Employers(this.employeedetails['username'],this.employeedetails['city'],this.employeedetails['country'],this.employeedetails['firstname'],this.employeedetails['lastname']
   ,this.employeedetails['address'],this.employeedetails['salary']);*/
  

   //console.log(this.Emp)



     this.categorie.updateEmployee(this.youssef.id,this.youssef).subscribe(res=>{
     
     this.categorie.updateClient(this.youssef.clients.id,this.variable).subscribe(res=>{
      
      console.log(res)

      
       this.getSelectedOptionText(event);
         console.log(this.variable)
           } )
 
        this.router.navigate(['/show-all-employers']);
     },
     err=>{
      console.log('Error-',err.message);
     }
      )

  }




  
  ngOnInit() {

  

    console.log(this.youssef.clients.id)


    this.categorie.getClient().subscribe(res=>{
      
      console.log(res)
       
  
     
      }
       )

    console.log(this.youssef.image)
    
   /*this.employeedetails=this.formbuilder.group({
     
    username:[''],
    city:[''],
    coutry:[''],
    firstname:[''],
    lastname:[''],
    address:[''],
    salary:null,
  
  })*/
  }
}
