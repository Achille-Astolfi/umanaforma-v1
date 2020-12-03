import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/resource/candidate';

@Component({
  selector: 'app-candidati-item',
  templateUrl: './candidati-item.component.html',
  styleUrls: ['./candidati-item.component.css']
})
export class CandidatiItemComponent implements OnInit {

  @Input() candidate!: Candidate;

  constructor() { }

  ngOnInit(): void {
  }

}
