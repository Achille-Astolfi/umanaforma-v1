import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-home',
  templateUrl: './sample-home.component.html',
  styleUrls: ['./sample-home.component.css']
})
export class SampleHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  doLogin(event: Event): void {
    (window as any)["$"]('#staticBackdrop').modal('hide');
  }

}
