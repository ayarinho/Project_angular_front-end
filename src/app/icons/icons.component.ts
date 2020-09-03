import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../services/categorie.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  Data:any;

  constructor( private categorie:CategorieService) { }


  ngOnInit() {

  }

}
