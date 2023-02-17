
import { Pipe, PipeTransform } from '@angular/core';
import { cardData } from 'src/app/dashboard/model/card.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
/**
   * filterdata form given list values
   * @param value
   * @param searchData
   * @returns cardData[]
   */
  transform(value: cardData[], searchData: string): unknown {
    if (!searchData) {
      return value;
    }
  
    searchData = searchData.toLowerCase();
    const data = value.filter((item) => {
      return item.title.toLowerCase().indexOf(searchData.toLowerCase()) !== -1;
    })
  
    return data;
  }

}