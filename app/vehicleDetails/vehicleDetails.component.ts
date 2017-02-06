import {Component,Input,Output,OnInit,SimpleChange,EventEmitter} from '@angular/core';
import {LookUpService} from '../services/lookup.service';

@Component({
  selector: 'vehicleDetails',
  styleUrls: ['./vehicleDetails.component.css'],
  templateUrl: './vehicleDetails.component.html'
   
})
export class VehicleDetailsComponent{
constructor(){
 
}
@ Input() vehicleDataDesc:any = {};

  ngOnInit() {
  }

}
