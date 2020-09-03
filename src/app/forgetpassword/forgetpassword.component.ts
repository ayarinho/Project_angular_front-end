import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from '../../services/categorie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  registerForm: FormGroup;
  msg:string;


  constructor( private formBuilder: FormBuilder, private categorie:CategorieService,
    private router: Router) { }

  ngOnInit(): void {



    this.registerForm = this.formBuilder.group({
    
      email :['', Validators.required],
  
  });
  }

  onSubmit(){

   this.categorie.forgetpassword(this.f.email.value).subscribe( data => {
        data;      
    console.log(this.msg)
    
    alert(data)
  

});

this.router.navigate(['/login']);

  }

  get f() { return this.registerForm.controls; }



}
