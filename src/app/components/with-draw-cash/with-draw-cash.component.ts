import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/services/network.service';
import { routePath, endPoints } from 'src/app/utility/constant';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-with-draw-cash',
  templateUrl: './with-draw-cash.component.html',
  styleUrls: ['./with-draw-cash.component.scss']
})
export class WithDrawCashComponent implements OnInit {

  constructor(private router: Router,
    private networkService: NetworkService,
    private globalService: GlobalService,
    public dialog: MatDialog) {

     }

  ngOnInit() {
    if(!this.globalService.cardNumber) {
      this.router.navigateByUrl(routePath.login)
    }
  }
  withdrawAmount(formData) {
    const cashWithdrawDetails = {amount: formData.value.amount,
      cardNumber: this.globalService.cardNumber}
    this.networkService.postData(endPoints.transaction, cashWithdrawDetails).subscribe(data => {
      console.log('data success', data);
      this.globalService.transactionDetails = data;
      this.router.navigateByUrl(routePath.transactionDetails);
    }, (error) => {
      const dialogRef = this.dialog.open(DialogComponent, {
        width: '250px',
        data: { title: 'Error', message: error.error }
      });
      console.log(error);
    });
  }
}
