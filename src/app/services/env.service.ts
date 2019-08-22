import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  basebath = 'https://quiet-falls-67742.herokuapp.com/index.php?';
  
  constructor() { }
}
