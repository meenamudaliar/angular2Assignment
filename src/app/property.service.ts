import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from './property';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
private baseURL="http://localhost:8090/property";
router:any;
  constructor(private httpClient:HttpClient) { }
getPropertyList():Observable<Property[]>{
  return this.httpClient.get<Property[]>(`${this.baseURL}`);
}
CreateProperty(property:Property):Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`,property);
}
}
