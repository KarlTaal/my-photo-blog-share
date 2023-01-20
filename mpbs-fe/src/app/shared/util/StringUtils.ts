import { TitleCasePipe } from '@angular/common';

export class StringUtils {
  static toTitleCase(str: string) {
    return new TitleCasePipe().transform(str);
  }
}
