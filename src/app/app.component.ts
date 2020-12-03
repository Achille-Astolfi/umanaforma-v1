import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showUsername!: string;

  constructor(private router: Router) { }

  displayingSample(): boolean {
    return this.router.url.startsWith("/sample");
  }

  usernameReceiver(showUsername: string) : void {
    this.showUsername = showUsername;
    console.log(this.showUsername);
  }
}
