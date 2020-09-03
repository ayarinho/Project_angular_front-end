import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

//import { AlertService} from '../../services/alert.service';
import { AuthenticationService } from '../../services/authentification.service';
import { CategorieService } from '../../services/categorie.service';
import { HttpClient, HttpResponse, HttpEventType } from '@angular/common/http';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html', 
    styleUrls: ['./register.component.css']
  })
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;
    liste=[];
    
    selectedFiles: FileList
    currentFileUpload: File
    progress: { percentage: number } = { percentage: 0 }
    form:FormGroup
    variable:any;
    IdClt:any;




    constructor(
        private fb: FormBuilder,
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private categorie:CategorieService
      
    ){
    }


    getSelectedOptionText(event: Event) {
      let selectedOptions = event.target['options'];
      let selectedIndex = selectedOptions.selectedIndex;
      let selectElementText = selectedOptions[selectedIndex].text;
      console.log(selectElementText)
    
      this.variable=selectElementText;
    }


    RechercherUsername(){

        this.authenticationService.getusername().subscribe(
            data => {
               
                 console.log(data)

                 for(let key in data){
         if(data.hasOwnProperty(key)){
                 this.liste.push(data[key]);
                
             
              }  }});
              console.log(this.liste)
    }


      GetIdClient(){

        this.categorie.getIdClient(this.variable).subscribe( data => {
               
          console.log(data)
          
          this.IdClt=data;
  
     
      });
      }




    ngOnInit() {

     /* this.categorie.SetClientByEmp(2,112).subscribe(
        data1 => {
       
           // console.log(data)  

         
        });*/

        

    this.authenticationService.getusername().subscribe( data => {
               
        console.log(data)

        for(let key in data){
            this.liste.push(data[key])
        }
   
    });
    console.log(this.liste)




        this.RechercherUsername();

       
        this.registerForm = this.formBuilder.group({
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            email :['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(3)]],
           
            
            
        });
    }



    selectFile(event) {
        this.selectedFiles = event.target.files;
        console.log(event.target.files)
      }

  


      upload() {
       
        this.progress.percentage = 0;
        this.currentFileUpload = this.selectedFiles.item(0)
        console.log(this.currentFileUpload.name)
        this.categorie.pushFileToStorage(this.currentFileUpload).subscribe(event => {
            console.log(event)
            console.log(event.type)
          if (event.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            console.log('File is completely uploaded!');
          }
        })
        this.selectedFiles = undefined
      }


    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }





    onSubmit() {

     // this.GetIdClient();
     
     //this.getSelectedOptionText(event);
      
       console.log(this.f.username.value)

      
        console.log(this.liste)
       
     

        this.submitted = true;

///autre button pour IDclt et this.f.username.value



        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }else

       //console.log(this.registerForm.value)
        this.loading = true;
         
       
      

        for(let i in this.liste){
            if(this.f.username.value==this.liste[i] ){
                console.log("erreeeur")
               
            }else
         this.categorie.ajouteremployer(this.registerForm.value)

                .subscribe(
                    data => {
                        console.log(data)
                   
                     
                
                   error => {
                     
                           this.loading = false;
                      }  
                    });
             break;
                    }

                 

                    this.categorie.getEmployer("roua14") .subscribe(
                      data => {
                        console.log(data)
                          console.log(data.id)  
            
                         console.log(this.IdClt)
                          this.categorie.SetClientByEmp(this.IdClt,data.id).subscribe(
                            data1 => {
                           
                                console.log(data1)  
            
                             
                            });
            
                          this.categorie.ajouterphoto(data.id,this.currentFileUpload.name).subscribe(
                              data2=> {
                                  console.log(data2)  
            
                             console.log(data.id)
                             console.log(this.currentFileUpload.name)
                               
                              });
            
                           
             
                             
                
                            });
                     // this.router.navigate(['/login']);

                    console.log(this.currentFileUpload.name)
                 
 } 
 
            
         
}
    
    

