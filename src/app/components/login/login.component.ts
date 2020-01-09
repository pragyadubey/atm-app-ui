import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routePath, endPoints } from 'src/app/utility/constant';
import { NetworkService } from 'src/app/services/network.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isSubmit = false;

  constructor(private router: Router,
    private networkService: NetworkService,
    private globalService: GlobalService,
    public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  onSubmit(cardDetails) {
    this.isSubmit = true;
    console.log(cardDetails);
    if (cardDetails.valid) {
      this.networkService.postData(endPoints.cardDetails, cardDetails.value).subscribe(data => {
        console.log('data success', data);
        this.globalService.cardNumber = data['cardNumber'];
        this.router.navigateByUrl(routePath.cashWithDraw);
      }, (error) => {
        const dialogRef = this.dialog.open(DialogComponent, {
          width: '250px',
          data: { title: 'Error', message: error.error }
        });
        console.log(error);
      });

    }

  }
}
