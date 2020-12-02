import { Component, OnInit } from '@angular/core';
import { LogRestService } from 'src/app/service/log-rest.service';

@Component({
  selector: 'app-final-corsi-iscriviti',
  templateUrl: './final-corsi-iscriviti.component.html',
  styleUrls: ['./final-corsi-iscriviti.component.css']
})
export class FinalCorsiIscrivitiComponent implements OnInit {

  constructor(private logRest: LogRestService) { }

  ngOnInit(): void {
  }

}
