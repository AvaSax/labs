import { Pipe, PipeTransform } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Pipe({
  name: 'sortBy'
})
export class SortbyPipe implements PipeTransform {

  transform(users: any[], sortBy: string): any[] {
    if (!isNullOrUndefined(sortBy)) {
      if (!sortBy.includes('Reversed')) {
        return users.sort(this.byField(sortBy));
      } else {
        sortBy = sortBy.slice(0, sortBy.indexOf('Reversed'))
        return users.sort(this.reversedByField(sortBy));
      }
    } else
      return users;
  } 

  byField(field: string) {
    return (a, b) => a[field] - b[field];
  }

  reversedByField(field) {
    return (a, b) => b[field] - a[field];
  }

}
