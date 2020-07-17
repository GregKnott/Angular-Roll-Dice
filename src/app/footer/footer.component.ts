import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  date = new Date();
  name = "Greg Knott";
  studentID = "991514431";

  ngOnInit(): void {
  }

}
