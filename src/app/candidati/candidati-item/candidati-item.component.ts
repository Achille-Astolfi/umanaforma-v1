import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from 'src/app/resource/candidate';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-candidati-item',
  templateUrl: './candidati-item.component.html',
  styleUrls: ['./candidati-item.component.css']
})
export class CandidatiItemComponent implements OnInit {

  @Input() candidate!: Candidate;

  constructor(private umanaRestService: UmanaRestService, private router: Router) { }

  ngOnInit(): void {
  }

  doCandidate(event: Event): void {
    this.umanaRestService.getCandidateId(this.candidate.id);
    this.router.navigateByUrl('/candidati-dettaglio');
  }

}
