import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LogRestService } from './service/log-rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "";

  constructor(public logRest: LogRestService, private router: Router) { }

  ngOnInit(){
    this.logRest.checkAlive();  
  }

  describeAlive(): string{
    if(this.logRest.isAlive){
      return "attivato";
    }else if(!this.logRest.isAlive){
      return "non attivato";
    }else{
      return "sconosciuto";
    }
  }

  displayingSample(): boolean {
    return this.router.url.startsWith("/sample");
  }
}
