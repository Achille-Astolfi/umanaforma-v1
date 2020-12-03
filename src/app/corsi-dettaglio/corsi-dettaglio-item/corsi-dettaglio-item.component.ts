import { Component, Input, OnInit } from '@angular/core';
import { Candidate } from 'src/app/resource/candidate';

@Component({
  selector: 'app-corsi-dettaglio-item',
  templateUrl: './corsi-dettaglio-item.component.html',
  styleUrls: ['./corsi-dettaglio-item.component.css']
})
export class CorsiDettaglioItemComponent implements OnInit {

  @Input() candidate!: Candidate;

  constructor() { }

  ngOnInit(): void {
  }

}
