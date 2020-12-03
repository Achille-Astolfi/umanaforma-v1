import { Component, OnInit } from '@angular/core';
import { LogRestService } from 'src/app/service/log-rest.service';

@Component({
  selector: 'app-final-corsi-grazie',
  templateUrl: './final-corsi-grazie.component.html',
  styleUrls: ['./final-corsi-grazie.component.css']
})
export class FinalCorsiGrazieComponent implements OnInit {

  constructor(public logRest: LogRestService) { }

  ngOnInit(): void {
  }

}
