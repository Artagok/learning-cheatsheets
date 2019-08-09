import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('getSeconds') seconds = new EventEmitter<number>();
  num: number;
  intervalID: any;

  constructor() { }

  ngOnInit() {
  }

  startGame = () => {
    this.num = 0;
    this.intervalID = setInterval(() => {
      this.num++;
      this.seconds.emit(this.num);
    }, 1000);
  };

  stopGame = () => clearInterval(this.intervalID);

}
