import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'lang'
})
export class LangPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    let formDate: string = '';
    
    if (args[0] === 'es'){
      formDate = moment(value).locale('es').format('DD MMMM YYYY, HH:mm:ss a');
    }
    return formDate;
  }

}
