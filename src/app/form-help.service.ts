import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormHelpService {

  constructor() { }

  // https://stackoverflow.com/a/25352300
  isAlphaNumeric(s: string): boolean {
    let code: number;
    let i: number;
    let len: number;

    for (i = 0, len = s.length; i < len; i++) {
      code = s.charCodeAt(i);
      if (code == 32) {
        continue;
      }
      if (!(code > 47 && code < 58) && // numeric (0-9)
          !(code > 64 && code < 91) && // upper alpha (A-Z)
          !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
      }
    }
    return true;
  }
}
