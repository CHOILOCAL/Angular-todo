import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  // 변수
  // count = 0;

  // 객체 생성
  @Output() clickEvent = new EventEmitter();

  constructor() { }

  // test function 
  // test($event:MouseEvent){
  //   console.log("test")
  // }

  // start function
  start(){
    // this.count++;
    this.clickEvent.emit(); 

  }

  ngOnInit(): void {
  }

}
