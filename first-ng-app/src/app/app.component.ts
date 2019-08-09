import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: string;
  showSecret: boolean;
  clicks: any[];

  constructor() {
    this.username = '';
    this.showSecret = false;
    this.clicks = [];
  }

  resetUsername = () => { this.username = ''};
  toggleSecret = () => {
    this.showSecret = !this.showSecret;
    this.clicks.push({
      date: new Date(),
      num: this.clicks.length + 1
    })
  };
}
