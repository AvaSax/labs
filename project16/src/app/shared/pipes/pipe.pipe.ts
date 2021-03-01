import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(workers: any[], filter: string): any[] {
    if (filter === '') {
      return workers;
    } else {
      return workers.filter((worker) => {
        return worker.name.toLowerCase().includes(filter.toLowerCase()) || worker.surname.toLowerCase().includes(filter.toLowerCase());
      });
    }
  }
}