import { Client } from './services/Client';

export class Employers{

    private city:string;
    public id:number;
    public username:string;
    private  country:string;
    private  firstname:string;
    private lastname:string;
    private salary:DoubleRange;
    private  address:string;
    private  email:string;
    public image:string;
    public clients:Client
    

    constructor(username:string,city:string,country:string,firstname:string,lastname:string,address:string,salary:DoubleRange){
       this.username=username;
        this.city=city;
        this.country=country;
        this.firstname=firstname;
        this.lastname=lastname;
        this.address=address;
        this.salary=salary;
    }

  
}