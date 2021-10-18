import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Property } from '../property';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
property:Property=new Property();
  constructor(private router:Router,private propertyService:PropertyService) { }

  ngOnInit(): void {
  }
  saveProperty(){
    this.propertyService.CreateProperty(this.property).subscribe(data=>{
      console.log(data);
      this.gotoPropertyList();
    },
      error=>console.log(error));
  }
  gotoPropertyList(){
    this.router.navigate(['/list']);
  }
  onSubmit(){
    this.saveProperty();
  }
  }


