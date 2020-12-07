import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleCourseService } from 'src/app/service/title-course.service';
import { TitleService } from 'src/app/service/title.service';

@Component({
  selector: 'app-corsi-grazie',
  templateUrl: './corsi-grazie.component.html',
  styleUrls: ['./corsi-grazie.component.css']
})
export class CorsiGrazieComponent implements OnInit {

  public endTime = 6;

  constructor(
    public titleCourse: TitleCourseService,
    private titleService: TitleService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.titleService.setPage("Thanks for Registration");

    this.redirect();
  }

  async redirect() {
    for (let i=0; i <= 6; i++) {
      if (i < 6) {
          this.endTime = this.endTime - 1;
          await this.delay(1000);
        } else {
          this.router.navigateByUrl("/dashboard-user");
        }
      }
      
    }

    delay(ms: number) {
      return new Promise( resolve => setTimeout(resolve, ms) );
  }
   
  }
