import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/resource/course';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-corsi-admin-item',
  templateUrl: './corsi-admin-item.component.html',
  styleUrls: ['./corsi-admin-item.component.css']
})
export class CorsiAdminItemComponent implements OnInit {

  @Input() course!: Course;

  constructor(private umanaRestService: UmanaRestService, private router: Router) {
   }

  ngOnInit(): void {
  }

  doDettaglio(event: Event): void {
    this.router.navigateByUrl('/corsi-dettaglio');
  }

}
