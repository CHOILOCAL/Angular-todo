import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {


  test = '시간값'; // 문자열 변수 지정


  constructor() { }

  ngOnInit(): void {
  }

}
