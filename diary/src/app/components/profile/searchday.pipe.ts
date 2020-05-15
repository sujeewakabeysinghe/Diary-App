import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchday'
})
export class SearchdayPipe implements PipeTransform {

  transform(day: any[], searchday: any): any[] {
    if(!day) return null;
    if(!searchday) return day;

    searchday = searchday.toLowerCase();

    return day.filter(function(days){
        return JSON.stringify(days.date).toLowerCase().includes(searchday);
    });
  }

}
