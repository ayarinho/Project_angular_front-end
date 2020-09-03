import { HttpClient,HttpHeaders } from '@angular/common/http';
import{Injectable} from '@angular/core'
import { Employers } from '../Employers';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

import { HttpRequest, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class CategorieService{


emp:Employers;

   constructor(private http:HttpClient ) { }

p


    infos={
        nom: 'youssef',
        mail: 'youssef.ayari1@esprit.tn',
        Tel : 26579007
      }
    
      header = new HttpHeaders(
        {'Access-Control-Allow-Origin' : '*',
          'Content-type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'}
    );
      comments=[
         {date:new Date(), message:"bonjour youssef" },
         {date:new Date(), message:"salut maman" },
         {date:new Date(), message:"bonjouur" },
      ];


      addcomments(c){

        this.comments.push(c);
        c.date=new Date();
    
      }
    
     getallcomments(){

        return this.comments;
     }

     getInfos(){

        return this.infos;
     }

  
     getProduit(){

      return  this.http.get("http://localhost:8084/get-produit");
     }


    getas(){

      return this.http.get("http://localhost:8084//get-price");
    }
    

    getEmploer(){

      return this.http.get("http://localhost:8084/show-all-employers");
    }


    ajouteremployer(employe:Employers){

      return this.http.post("http://localhost:8084/add-employe/",employe);
    }

    


    deleteEmployee(id: number) {
      let url="http://localhost:8084/deleteEmp/" + id;
      return this.http.delete(url, { responseType: 'text' });
    }


    
     updateEmployee(id: number, value: any) {
       let url="http://localhost:8084/modify-emp/"+ id;
    return this.http.put(url, value);
  }

  updateClient(id: number, clientname: String) {
    let url="http://localhost:8084/modify-clientname/"+ id +"/"+clientname;
 return this.http.put(url,clientname);
}
  

  getEmp(password :number){

    return this.http.get<any>("http://localhost:8084/get-emp/"+ password );
  }

  
  getEmployer(username :String){

    return this.http.get<any>("http://localhost:8084/salem/"+ username );
  }



  
  
  setdata(data)
  {
    this.emp=data;
  } 


  forgetpassword(email:string) {
    let url="http://localhost:8084/get/" + email;
    return this.http.get(url, { responseType: 'text' });
  }

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', 'http://localhost:8084/upload', formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }


  ajouterphoto(id: number, photo: string) {
    return this.http.post("http://localhost:8084/photo/"+id+"/"+photo,{id,photo});
  }

  getClient(){

    return this.http.get("http://localhost:8084/clients");
  }

  getIdClient(clientname :String){

    return this.http.get("http://localhost:8084/get-idClient/"+ clientname );
  }



  SetClientByEmp(idclt:number, idEmp:number){

    return this.http.get("http://localhost:8084/get-EmpbyClt/"+ idclt+"/"+idEmp );
  }

  }


  
     


