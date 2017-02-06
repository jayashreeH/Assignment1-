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


yearAscSorting(){    
      this.vehicles.sort(function(a:any,b:any){
      var textA = a.year;
      var textB = b.year;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;  
    }); 
}
yearDscSorting(){    
      this.vehicles.sort(function(a:any,b:any){
      var textA = a.year;
      var textB = b.year;
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;   
    });
  }

  nameAscSorting(){    
      this.vehicles.sort(function(a:any,b:any){
      var textA = a.name;
      var textB = b.name;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;  
    }); 
}
nameDscSorting(){    
      this.vehicles.sort(function(a:any,b:any){
      var textA = a.name;
      var textB = b.name;
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;   
    });
  }
    modelAscSorting(){    
      this.vehicles.sort(function(a:any,b:any){
      var textA = a.name;
      var textB = b.name;
      return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;  
    }); 
}
modelDscSorting(){    
      this.vehicles.sort(function(a:any,b:any){
      var textA = a.name;
      var textB = b.name;
      return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;   
    });
  }
}
