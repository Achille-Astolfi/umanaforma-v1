import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/resource/candidate';

@Component({
  selector: 'app-courses-detail-item',
  templateUrl: './courses-detail-item.component.html',
  styleUrls: ['./courses-detail-item.component.css']
})
export class CoursesDetailItemComponent implements OnInit {

  @Input() candidate!: Candidate;

  constructor() { }

  ngOnInit(): void {
  }

}
