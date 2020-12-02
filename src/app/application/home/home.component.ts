import { Component, OnInit } from '@angular/core';
import { UmanaFormaRestServiceService } from 'src/app/service/umana-forma-rest-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private username !: string;
  private password !: string;

  constructor(private umanaFormaRestService : UmanaFormaRestServiceService) { }

  ngOnInit(): void {
  }

  doLogin(event: Event): void {
    
  }

}

