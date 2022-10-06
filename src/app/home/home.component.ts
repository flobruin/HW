import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'AB';
  public age = 15;
  public vehicles = ['toyota', 'honda'];

  constructor(private common: CommonService) {
    this.age = common.age;
   }

  ngOnInit(): void {
  } 

  public tangTuoi() {
    this.common.age++;
     this.age = this.common.age;
     this.vehicles.push(this.name + ':' + this.age);
  }

}
