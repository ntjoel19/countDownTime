import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setToZero'
})
export class SetToZeroPipe implements PipeTransform {

  transform(value: number): number {
    if(value < 0) return 0;

    return value;
  }

}
