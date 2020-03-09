import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {


  test = 1; // 문자열 변수 지정

  // 생성자
  constructor() {

    setInterval(() => {
      this.test++;
    }, 1000) // 1sec

   }


  // 생명주기
  ngOnInit(): void {
  }

}
