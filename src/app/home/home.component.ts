import { AuthService } from '../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: `
        <h2 style="color: white;">Welcome!</h2>
    `
})

export class HomeComponent implements OnInit {
    ngOnInit() { }
}