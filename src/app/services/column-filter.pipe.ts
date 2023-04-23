import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'columnFilter'
})
export class ColumnFilterPipe implements PipeTransform {

  transform(value: any, searchString: string): any {
    if (searchString) {
      const searchStringLowerCase = searchString.toLowerCase();
      return value.filter((user: any) =>
        ['id', 'name', 'email', 'website'].some(prop =>
          user[prop]?.toString().toLowerCase().includes(searchStringLowerCase)
        )
      );
    }
    return value;
  }
}
