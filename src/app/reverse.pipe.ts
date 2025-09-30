import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string, exclamation: boolean) {
    let newValue = "";

    for(let i = value.length - 1; i >= 0; i--){
      newValue += value[i];
    }

    if(exclamation) newValue += '!';

    return newValue;
  }

}
