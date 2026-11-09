import { Pipe, PipeTransform } from '@angular/core';
import { Chanson } from './model/chanson.model';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: Chanson[], filterText: string): Chanson[] {
    if (!list) return [];
    if (!filterText) return list;
    return list.filter(item =>
      item.titre?.toLowerCase().includes(filterText.toLowerCase()));
  }

}