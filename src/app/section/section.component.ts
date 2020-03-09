import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {


  constructor() { }

  startTime(){
    console.log("섹션 컴포넌트가 잘 받았다"); 
  }



  ngOnInit(): void {
  }

}
