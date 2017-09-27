import { OAuthService } from 'angular-oauth2-oidc';
import { Flight } from '../../entities/flight';
import { BASE_URL } from '../../app.tokens';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()
export class FlightService {

    constructor(
        private http: HttpClient,
        private oauthService: OAuthService,
        @Inject(BASE_URL) private baseUrl: string) { 
    }

    flights: Flight[] = [];

    delay(): void {

        const ONE_MINUTE = 1000 * 60;

        let oldFlights = this.flights;
        let oldFlight = oldFlights[0];
        let oldDate = new Date(oldFlight.date);

        let newDate = new Date(oldDate.getTime() + ONE_MINUTE * 15);

        // Mutable
        // oldFlight.date = newDate.toISOString();

        // Immutable
        let newFlight: Flight = { ...oldFlight, date: newDate.toISOString() };

        let newFlights: Flight[] = [ newFlight, ...oldFlights.slice(1) ];

        this.flights = newFlights;

    }

    load(from: string, to: string): void {
        this.find(from, to)
            .subscribe(
                flights => this.flights = flights,
                err => console.error('Error loading flights', err));
    }

    findById(id: string): Observable<Flight> {
        let url = this.baseUrl + 'flight';
        
                let params = new HttpParams()
                                    .set('id', id);
        
                let headers = new HttpHeaders()
                                    .set('Accept', 'application/json');
        
                return this.http.get<Flight>(url, { params, headers });    
                
    }

    find(from: string, to: string): Observable<Flight[]> {
        
        let url = this.baseUrl + 'flight';

        let params = new HttpParams()
                            .set('from', from)
                            .set('to', to);

       let headers = new HttpHeaders()
                            .set('Accept', 'application/json');
                            
        return this.http.get<Flight[]>(url, { params, headers });    

    }
}