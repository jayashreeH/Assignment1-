import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/observable';
import  'rxjs/add/operator/catch';
import  'rxjs/add/observable/throw';
@Injectable()
export class LookUpService {
    
    constructor(public httpSvc:Http){}
    
  
   getVehicleListFromApi():Observable<any>{

return this.httpSvc.get("./app/api/vehicleList.json")
.map((response)=>response.json()).catch((error)=>Observable.throw(error))

   }
}