import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modelSorting'
})
export class modelSortingPipe implements PipeTransform {
//var items:Array<any>= new Array();
transform(value: any, args?: any): any {
 //

//console.log("itemsss==" +value);
return value;
}

}


