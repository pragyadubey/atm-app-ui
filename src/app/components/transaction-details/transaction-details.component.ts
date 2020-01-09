import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  constructor(private globalService: GlobalService) { }

  ngOnInit() {
  }


//   {
//     "availableBalance": 1600,
//     "withdrawnDenominations": {
//         "200": 1
//     }
// }


}
