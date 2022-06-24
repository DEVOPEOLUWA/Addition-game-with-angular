import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  public amount: number;
  first = Math.random() * 20 + 1;
  second = Math.random() * 70 + 2;
  firstTwo = this.first.toFixed(0);
  secondTwo = this.second.toFixed(0);
  count = 0;
  countTwo = 0;
  third = this.first + this.second;
  fourth = Math.floor(this.third);
  value: any;
  isShow = false;
  isShowTwo = false;


  getValue(val) {
    this.value = val;
  }
  function() {
    this.third = this.first + this.second;
    this.fourth = Math.round(this.third);
    if (this.value == this.fourth) {
      let audio: HTMLAudioElement = new Audio(
        'https://drive.google.com/uc?export=download&id=1CZLDd11vw6skrEUHE5EpoTL1AbIL_uUX'
      );
      audio.play();
      this.count++;
      this.isShowTwo = true;
      this.isShow = false;
    } else {
      let audio: HTMLAudioElement = new Audio(
        'https://drive.google.com/uc?export=download&id=1EamI_xSqz0vgqQ-fZIoj0LzwXQdvQ5UR'
      );
      audio.play();
      this.isShow = true;
      this.isShowTwo = false;
      this.countTwo++;
    }
  }

  functionTwo() {
    this.first = Math.random() * 50 + 2;
    this.second = Math.random() * 20 + 13;
  }

  constructor() {}

  ngOnInit() {}
}


