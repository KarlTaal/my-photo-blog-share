import { TitleCasePipe } from '@angular/common';

export class StringUtils {

  static toTitleCase(str: string): string {
    return new TitleCasePipe().transform(str);
  }

  static enumToKeysArray(enumVal: any): string[] {
    return Object.keys(enumVal).filter(key => isNaN(Number(key)));
  }

}
