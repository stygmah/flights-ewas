import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/services/flight.service';
import { Flight } from 'src/app/models/Flight.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private flights: Flight[];

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flights = [];
    this.GetFlights();
  }

  GetFlights(){
    this.flightService.getFlights()
      .subscribe((flights) => {
        this.flights = flights;
      });

  }

}
