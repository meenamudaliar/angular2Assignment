import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-propertylist',
  templateUrl: './propertylist.component.html',
  styleUrls: ['./propertylist.component.css']
})
export class PropertylistComponent implements OnInit {
property:Property[];
  constructor(private router:Router,private propertyService:PropertyService) { }

  ngOnInit(): void {
    this.getProperty();
  }
  create(){
    this.router.navigate(['/create']);
  }
  getProperty(){
    this.propertyService.getPropertyList().subscribe(async data=>{
      this.property=data;},
      error=>{
        console.log(error);
      
    });
  }

}
