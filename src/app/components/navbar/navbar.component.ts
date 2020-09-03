import { Component, OnInit, ElementRef, Output, Input } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import Chart from 'chart.js';
import { CategorieService } from '../../../services/categorie.service';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Employers } from '../../../Employers';
import { LoginComponent } from '../../login/login.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import {  AuthenticationService } from '../../../services/authentification.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private listTitles: any[];
    location: Location;
      mobile_menu_visible: any = 0;
    private toggleButton: any;
    private sidebarVisible: boolean;
  // loginComponent=new LoginComponent(this.http,this.formBuilder,this.routee,this.router,this.authenticationService,this.categorie);
    id:number;
    k:any;
    data2=this.categorie.emp;
    M:Employers;
    N:any;
    loginForm: FormGroup;
    private customer: LoginComponent = new LoginComponent(this.http,this.formBuilder,this.routee,this.router,this.authenticationService,this.categorie);
   
     
    public isCollapsed = true;

    constructor( location: Location,  private element: ElementRef, private router: Router
      ,private categorie:CategorieService,private http:HttpClient,     private routee: ActivatedRoute,
      private authenticationService: AuthenticationService, private formBuilder: FormBuilder) {
      this.location = location;
          this.sidebarVisible = false;
        
    }



    logout(){

      this.router.navigate(['/login']);
    

    }
   




    ngOnInit(){

 
    console.log(this.data2)


      

      this.listTitles = ROUTES.filter(listTitle => listTitle);
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
      this.router.events.subscribe((event) => {
        this.sidebarClose();
         var $layer: any = document.getElementsByClassName('close-layer')[0];
         if ($layer) {
           $layer.remove();
           this.mobile_menu_visible = 0;
         }
     });

    
    }

    collapse(){
      this.isCollapsed = !this.isCollapsed;
      const navbar = document.getElementsByTagName('nav')[0];
      console.log(navbar);
      if (!this.isCollapsed) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('bg-white');
      }else{
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('bg-white');
      }

    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
        const html = document.getElementsByTagName('html')[0];
        if (window.innerWidth < 991) {
          mainPanel.style.position = 'fixed';
        }

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);

        html.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];

        if (window.innerWidth < 991) {
          setTimeout(function(){
            mainPanel.style.position = '';
          }, 500);
        }
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
   

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 2 );
      }
      titlee = titlee.split('/').pop();

      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }

   
  
}
