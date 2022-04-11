import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankingdetailsService {

  constructor() { }
   getInfo()
  {
    
  return [
    {"accountnumber":25362,"accountinterestrate":8.4,"accounttype":"fixeddeposit"},
    {"accountnumber":75368555,"accountinterestrate":7.8,"accounttype":"recuringdeposit"},
    {"accountnumber":252513,"accountinterestrate":6.7,"accounttype":"timedeposit"},
   

  ]
  }
}
