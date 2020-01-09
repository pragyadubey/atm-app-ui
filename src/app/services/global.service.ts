import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    cardNumber: string;
    transactionDetails: any;
constructor() {
}
  
}