import { Flight } from '../../entities/flight';
import { Component, OnInit, EventEmitter } from '@angular/core';

//               V----------------V--------- Explizit importiert
import { Http, URLSearchParams, Headers } from '@angular/http';
import { FlightService } from '../flight-search/flight.service'
import { Subject } from "rxjs/Rx";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {

    from: string = 'Hamburg';
    to: string = 'Graz';
    selectedFlight: Flight;

    basket: any = {
        "3": true,
        "5": true
    };

    //private http: Http;

    constructor(private flightService: FlightService) { 
        //this.http = http;
    }

    afterSearch$ = new Subject<Flight[]>();

    get flights(): Array<Flight> {
        return this.flightService.flights;
    }
  
    get flights$() {
        return this.flightService.flights$;
    }
    
    search(): void {

        if (!this.from || !this.to) {
            this.afterSearch$.error('to and from expected!');
            return;
        }

        this.flightService.load(this.from, this.to);


    }
    
    delay() {
        this.flightService.delay();
    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }

    ngOnInit() { }
}