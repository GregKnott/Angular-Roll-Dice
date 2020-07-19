import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  side = 1;

  ngOnInit(): void {
  }

  rollDice()
  {
    var randomSide = Math.floor(1 + 6 * Math.random());
    console.log("Side = " + randomSide);
    this.side = randomSide;
  }

}
