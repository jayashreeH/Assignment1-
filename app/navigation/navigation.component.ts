import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {LookUpService} from '../services/lookup.service';
import {VehicleDetailsComponent} from '../vehicleDetails/vehicleDetails.component';
import {yearSortingPipe} from '../pipeForYear.pipe';
import {modelSortingPipe} from '../modelSorting.pipe';
@Pipe({
  name: 'yearSorting',
  
})
@Pipe({
  name: 'modelSorting',
  
})
@Component({
  selector: 'navigation',
  styleUrls: ['./navigation.component.css'],
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit{
  private childname: string
  vehicleFlag : boolean;
  item:any;
constructor(vechicleSVC:LookUpService){
  vechicleSVC.getVehicleListFromApi()
.subscribe((result)=>{this.vehicles=result.vehicles;
  console.log(JSON.stringify(result));
  },
  
  error=>{
    console.log(error);
  }); 
}
vehicles: Array<any>;

ngOnInit() {
  }
  showDetails(item){
    
  this.vehicleFlag=true;
  this.item=item;

  }

  check(){
console.log("hiii"+ this.vehicles[0].year);
var yearArray:Array<any>= new Array();
this.vehicles.sort();
for(var i =0; i<this.vehicles.length; i++){
    return this.vehicles;
  }
  console.log("hiii"+ this.vehicles[3]);
  }
}
