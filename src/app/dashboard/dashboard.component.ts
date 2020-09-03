import { Component, OnInit, Inject } from '@angular/core';
import * as Chartist from 'chartist';
import { HttpClient } from '@angular/common/http';
import { CategorieService } from '../../services/categorie.service';
//import { threadId } from 'worker_threads';
import { Chart } from 'chart.js';
import { data } from 'jquery';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,ReactiveFormsModule,FormControl } from '@angular/forms';
import { Employers } from '../../Employers';


import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

 
verif:boolean=false;
   chart;
    
    data2:any;
    data3:any;
    c:Employers;
    id:number;
    employee:Employers;
    employes:any;
    Emplist:any;
 
    form: FormGroup;

  
  constructor(private http:HttpClient,private categorie:CategorieService,
    private router:Router,private formbuilder:FormBuilder,private dialog: MatDialog) {
      
     
   }

   

   deleteEmployer(id: number){
  
   console.log(id);
    this.categorie.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);

        
        },
        error => console.log(error));
  
  window.location.reload();       
}


  RechercherUsrename(){
    
      
     for(let key in this.data3){
      
       console.log(this.data3[key])
   
   }
 }   


Employerupdateform=new FormGroup({  
  //  id:new FormControl(),  
    firstname:new FormControl(),  
    lastname:new FormControl(),  
   // username:new FormControl()  
  }); 

  
  getinfoupdate(name:String,lastname:String){
this.verif=true;
  }

   get EmpFirstname(){  
    return this.employes.get('Firstname');  
  }  
  get EmpLastname(){  
    return this.employes.get('Lastname');  

  
  }
  
  ngOnInit() {


  console.log(  this.categorie.emp)
     
      
    this.categorie.getEmploer().subscribe(data=>{
      this.data3=data;
      console.log(this.data3);
    })


    this.categorie.getas().subscribe(data=>{
      this.chart = new Chart('bar', {
        type: 'bar',
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Combo Bar and line Chart'
          },
        },
        data: {
          labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
          datasets: [
            {
              type: 'line',
              label: 'My First dataset',
              data: data,
              backgroundColor: 'rgba(255,0,255,0.4)',
              borderColor: 'rgba(255,0,255,0.4)',
              fill: false,
            },
        
            {
              type: 'bar',
              label: 'My Second dataset',
              data: data,
              backgroundColor: 'rgba(0,0,255,0.4)',
              borderColor: 'rgba(0,0,255,0.4)',
              fill: false,
            }
          ]
        }
      });
    })
  
    
    this.categorie.getas().subscribe(data=>{
      this.chart = new Chart('line', {
        type: 'bar',
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Combo Bar and line Chart'
          },
        },
        data: {
          labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
          datasets: [
            {
              type: 'bar',
              label: 'My First dataset',
              data: data,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(75, 192, 192, 0.2)',
              fill: false,
            },
        
            {
              type: 'bar',
              label: 'My Second dataset',
              data: data,
              backgroundColor: 'rgba(0,0,255,0.4)',
              borderColor: 'rgba(0,0,255,0.4)',
              fill: false,
            }
          ]
        }
      });
    })
  
    this.categorie.getas().subscribe(data=>{
      this.chart = new Chart('chart', {
        type: 'line',
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Combo Bar and line Chart'
          },
        },
        data: {
          labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
          datasets: [
            {
              type: 'line',
              label: 'My First dataset',
              data: data,
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(75, 192, 192, 0.2)',
              fill: false,
            },
        
            {
              type: 'line',
              label: 'My Second dataset',
              data: data,
              backgroundColor: 'rgba(0,0,255,0.4)',
              borderColor: 'rgba(0,0,255,0.4)',
              fill: false,
            }
          ]
        }
      });
    })

    
  }
}
