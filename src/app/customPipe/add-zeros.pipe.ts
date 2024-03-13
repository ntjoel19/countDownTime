import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addZeros'
})
export class AddZerosPipe implements PipeTransform {

  transform(value: number): string {
    if(value < 10) {
      return '0' + value;
    }
    return String(value);
  }

}
