import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Flight } from '../models/Flight.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http:HttpClient ) { }

  getFlights(){
    return this.http.get<Flight[]>(environment.API_URL+'/flights');
  }
}
