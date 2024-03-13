import { Component, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { CountDownService } from 'src/app/service/count-down.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent {
  activationCode! : number;
  activationDeadline: any;

  remainingTime : any;
  subscriptionToTimer!: Subscription;
  timerService = inject(CountDownService);

  ngOnInit() {
    console.log(new Date().toString());
    let endTime = localStorage.getItem('authentication_date') ?? new Date().toString(); 
    this.activationDeadline = new Date(Date.parse(endTime) + 60 * 10 * 1000);
    this.subscriptionToTimer = this.timerService.getRemainingTimeObservable(this.activationDeadline)
      .subscribe({
        next : time => {
          this.remainingTime = time;
        },
        error: (err) => console.error(err),
        complete: () => console.log('Observable completed')
      })
  }

  activate () {

  }
}
