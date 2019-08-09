import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  evens: number[];
  odds: number[];

  constructor() {
    this.evens = [];
    this.odds = [];
  }

  catchSeconds(sec: number) {
    sec%2 === 0 ? 
      this.evens.push(sec) :
      this.odds.push(sec);
  }
}
