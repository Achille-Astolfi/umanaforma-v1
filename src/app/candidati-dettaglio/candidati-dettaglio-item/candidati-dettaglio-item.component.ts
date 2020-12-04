import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/resource/course';

@Component({
  selector: 'app-candidati-dettaglio-item',
  templateUrl: './candidati-dettaglio-item.component.html',
  styleUrls: ['./candidati-dettaglio-item.component.css']
})
export class CandidatiDettaglioItemComponent implements OnInit {

  @Input() course!: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
