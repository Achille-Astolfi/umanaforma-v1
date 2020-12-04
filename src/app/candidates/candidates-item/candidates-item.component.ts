import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/resource/candidate';

@Component({
  selector: 'app-candidates-item',
  templateUrl: './candidates-item.component.html',
  styleUrls: ['./candidates-item.component.css']
})
export class CandidatesItemComponent implements OnInit {
  @Input() candidate!: Candidate;

  constructor() { }

  ngOnInit(): void {
  }

}
