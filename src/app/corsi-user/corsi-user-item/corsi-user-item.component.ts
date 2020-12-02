import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/resource/course';
import { UmanaRestService } from 'src/app/service/umana-rest.service';

@Component({
  selector: 'app-corsi-user-item',
  templateUrl: './corsi-user-item.component.html',
  styleUrls: ['./corsi-user-item.component.css']
})
export class CorsiUserItemComponent implements OnInit {

  @Input() course!: Course;
  router: any;

  constructor(private umanaRestService: UmanaRestService, router: Router) {
    this.router=router;
   }

  ngOnInit(): void {
  }

  doAction(event: Event): void {
    this.umanaRestService.getCourseId(this.course.id);
    this.router.navigateByUrl('/corsi-iscriviti');
  }

}
