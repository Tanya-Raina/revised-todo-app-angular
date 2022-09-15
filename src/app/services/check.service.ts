import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

  constructor() { }

  onCheckClicked(title: string) {
    alert(`You have checked an item in the ${title} list!`);
  }
}
