import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'date-practice';

  dateSign: string = '';
  limitDate: string = '';
  sent: boolean = false;
  counter: number = 0;

  constructor(){  
  }

  ngOnInit(): void {
    this.sendDoc();
  }

  sendDoc(): void {

    let pushButton = document.getElementById('sendDocument');
    let getDays: HTMLInputElement = <HTMLInputElement> document.getElementById('days');

    pushButton?.addEventListener('click', () => {
      this.sent = true; 
      this.counter = parseInt(getDays.value) ;
      this.dateSign = moment().format();
      this.addDays();
    })

  }

  addDays(): void{
    this.limitDate = moment().add(this.counter,'days').format();
  }
}
