webpackJsonp([0],{"+hen":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("BkNc"),o=r("eaRU"),i=r("/oeL"),a=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();l=a([Object(i.o)({selector:"flight-booking",template:r("XTe7")}),c("design:paramtypes",[])],l);var s=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(){}return t.prototype.ngOnInit=function(){},t}();d=s([Object(i.o)({selector:"passenger-search",template:'\n        <h1 style="color: white;">Passenger Search</h1>\n        <div class="row">\n        <div class="card">\n            <p>\n                <strong>Just a dummy page!</strong>\n            </p>\n        </div>\n        </div>\n    '}),f("design:paramtypes",[])],d);var h=r("y5KD"),p=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},g=function(){function t(t,e){this.element=t,this.zone=e,this.selectedChange=new i.x}return t.prototype.ngOnInit=function(){},t.prototype.select=function(){this.selected=!0,this.selectedChange.next(this.selected)},t.prototype.deselect=function(){this.selected=!1,this.selectedChange.next(this.selected)},t.prototype.blink=function(){var t=this;return this.element.nativeElement.firstChild.style.backgroundColor="crimson",this.zone.runOutsideAngular(function(){setTimeout(function(){t.element.nativeElement.firstChild.style.backgroundColor="lightsteelblue"},1e3)}),null},t}();p([Object(i.F)(),u("design:type","function"==typeof(v=void 0!==h.Flight&&h.Flight)&&v||Object)],g.prototype,"item",void 0),p([Object(i.F)(),u("design:type",Boolean)],g.prototype,"selected",void 0),p([Object(i.T)(),u("design:type",Object)],g.prototype,"selectedChange",void 0),g=p([Object(i.o)({selector:"flight-card",template:r("UUyc")}),u("design:paramtypes",["function"==typeof(m=void 0!==i.v&&i.v)&&m||Object,"function"==typeof(b=void 0!==i.R&&i.R)&&b||Object])],g);var v,m,b,y=r("Dqrr"),j=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},O=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},R=function(){function t(t){this.flightService=t,this.from="Hamburg",this.to="Graz",this.basket={3:!0,5:!0},this.afterSearch$=new y.Subject}return Object.defineProperty(t.prototype,"flights",{get:function(){return this.flightService.flights},enumerable:!0,configurable:!0}),t.prototype.search=function(){if(!this.from||!this.to)return void this.afterSearch$.error("to and from expected!");this.flightService.load(this.from,this.to)},t.prototype.delay=function(){this.flightService.delay()},t.prototype.select=function(t){this.selectedFlight=t},t.prototype.ngOnInit=function(){},t}();R=j([Object(i.o)({selector:"flight-search",template:r("I0OW"),styles:[r("8l9J")],providers:[o.a]}),O("design:paramtypes",["function"==typeof(w=void 0!==o.a&&o.a)&&w||Object])],R);var w,x=r("P2ql"),k=r("iiyQ"),I=r("bKpL"),F=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},S=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},D=function(){function t(t){this.route=t,this.warningDialog={show:!1,sender:null}}return t.prototype.canDeactivate=function(){var t=this;return this.warningDialog.show=!0,I.Observable.create(function(e){t.warningDialog.sender=e})},t.prototype.decide=function(t){this.warningDialog.show=!1,this.warningDialog.sender.next(t),this.warningDialog.sender.complete()},t.prototype.ngOnInit=function(){var t=this;this.route.params.subscribe(function(e){t.id=e.id,t.showDetails=e.showDetails}),this.route.data.subscribe(function(e){t.flight=e.flight})},t}();D=F([Object(i.o)({selector:"app-flight-edit",template:r("htyn"),styles:[r("GiTV")]}),S("design:paramtypes",["function"==typeof(_=void 0!==n.a&&n.a)&&_||Object])],D);var _,E=[{path:"",component:l,children:[{path:"flight-search",component:R},{path:"passenger-search",component:d},{path:"flight-edit/:id",component:D,canDeactivate:[k.a],resolve:{flight:x.a}}]}],P=r("qbdv"),C=r("bm2B"),T=r("T2Au"),q=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},M=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},H=function(){function t(t,e){this.fb=t,this.flightService=e,this.flights=[],this.formMetadata=[{name:"from",label:"Airport of departure"},{name:"to",label:"Airport of destination"}],this.basket={3:!0,5:!0},this.afterSearch$=new y.Subject,this.filter=t.group({from:["Graz",C.f.required],to:["Hamburg"]}),this.filter.valueChanges.subscribe(function(t){console.debug("Formular hat sich ge\xe4ndert",t)})}return t.prototype.search=function(){var t=this,e=this.filter.value;if(!e.from||!e.to)return void this.afterSearch$.error("to and from expected!");this.flightService.find(e.from,e.to).subscribe(function(e){t.flights=e,t.afterSearch$.next(t.flights)},function(e){t.afterSearch$.error(e),console.error("Fehler beim Laden",e)})},t.prototype.select=function(t){this.selectedFlight=t},t.prototype.ngOnInit=function(){},t}();H=q([Object(i.o)({selector:"reactive-flight-search",template:r("qgGl"),styles:[r("618E")],providers:[o.a]}),M("design:paramtypes",["function"==typeof(z=void 0!==C.a&&C.a)&&z||Object,"function"==typeof(G=void 0!==o.a&&o.a)&&G||Object])],H);var z,G;r.d(e,"FlightBookingModule",function(){return L});var $=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,a=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,n);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,r,a):o(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},L=function(){function t(){}return t}();L=$([Object(i.M)({imports:[P.b,C.b,C.e,n.g.forChild(E),T.a],declarations:[H,d,R,g,D,l],providers:[o.a],exports:[H,R]})],L)},"618E":function(t,e,r){e=t.exports=r("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},"8l9J":function(t,e,r){e=t.exports=r("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},GiTV:function(t,e,r){e=t.exports=r("rP7Y")(!1),e.push([t.i,"",""]),t.exports=t.exports.toString()},I0OW:function(t,e){t.exports='<h1>Flight Search</h1>\r\n\r\n<div class="row">\r\n<div class="card">\r\n<form #f="ngForm" roundTrip>\r\n\r\n    <div *ngIf="f?.hasError(\'roundTrip\')">... roundTrip ...</div>\r\n    <div *ngIf="f?.invalid">... Fehler auf Form-Ebene <pre>{{f.errors | json }}</pre>...</div>\r\n\r\n    <div class="form-group">\r\n        <label>From:</label>\r\n        <input \r\n            name="from" \r\n            [(ngModel)]="from" \r\n            [ngStyle]="{ \'background-color\': (f?.invalid || f?.controls[\'from\']?.invalid) ? \'hotpink\' : \'white\' }"\r\n            class="form-control"\r\n            required\r\n            minlength="3"\r\n            maxlength="30"\r\n            asyncLocation\r\n            location="Graz,Hamburg,N\xfcrnberg,Frankfurt,Wien,Z\xfcrich"\r\n            pattern="[A-Za-z\xf6\xe4\xfc\xdf\xd6\xc4\xdc]*">\r\n\r\n        <div *ngIf="f?.controls[\'from\']?.invalid && f?.controls[\'from\']?.dirty">...Fehler <pre>{{ f?.controls[\'from\']?.errors | json }}</pre>...</div>  \r\n        <div *ngIf="f?.controls[\'from\']?.hasError(\'required\')">...Required...</div>  \r\n        <div *ngIf="f?.controls[\'from\']?.hasError(\'minlength\')">...minlength...</div>  \r\n        <div *ngIf="f?.controls[\'from\']?.hasError(\'maxlength\')">...maxlength...</div>  \r\n        <div *ngIf="f?.controls[\'from\']?.hasError(\'pattern\')">...pattern...</div>  \r\n        <div *ngIf="f?.controls[\'from\']?.hasError(\'city\')">...city...</div>  \r\n        <div *ngIf="f?.controls[\'from\']?.hasError(\'asyncCity\')">...asyncCity...</div>  \r\n        <div *ngIf="f?.controls[\'from\']?.pending"><marquee direction="down">Validiere</marquee></div>  \r\n\r\n    </div>\r\n    <div class="form-group">\r\n        <label>To:</label>\r\n        <input name="to" [(ngModel)]="to" class="form-control">\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <button \r\n            class="btn btn-default"\r\n            (click)="search()" \r\n            [disabled]="!from || !to">Search</button>\r\n\r\n            <button \r\n            class="btn btn-default"\r\n            (click)="delay()" \r\n            [disabled]="!flights.length">Delay</button>\r\n\r\n    </div>\r\n</form>\r\n\r\n</div>\r\n</div>\r\n\r\n<div class="row">\r\n    <div *ngFor="let f of flights" class="col col-lg-3 col-md-4 col-sm-6 col-xs-12">\r\n        <flight-card \r\n            [item]="f" \r\n            [(selected)]="basket[f.id]"></flight-card>\r\n            \x3c!-- (selectedChange)="basket[f.id] = $event" --\x3e\r\n    </div>\r\n</div>\r\n\x3c!--\r\n<div class="card">\r\n\r\n\r\n    <table class="table table-contensed">\r\n       \r\n        <tr *ngFor="let f of flights" [class.active]="f === selectedFlight">\r\n            <td>{{f.id}}</td>\r\n            <td>{{f.from | city:\'short\'}}</td>\r\n            <td>{{f.to | city:\'long\' }}</td>\r\n            <td>{{f.date | date:\'dd.MM.yyyy HH:mm\'}}</td>\r\n            <td><a (click)="select(f)">Select</a></td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>\r\n--\x3e\r\n\r\n<div class="row">\r\n<div class="card">\r\n    <pre>{{ basket | json }}</pre>\r\n</div>\r\n</div>'},UUyc:function(t,e){t.exports='<div\r\n    style="padding:20px;"\r\n    class="card"\r\n    [ngStyle]="{\'background-color\': (selected) ?  \'orange\' : \'white\' }"\r\n>\r\n\r\n    <h2>{{item.from}} - {{item.to}}</h2>\r\n    <p>Flight-No.: #{{item.id}}</p>\r\n    <p>Date: {{item.date | date:\'dd.MM.yyyy HH:mm\'}}</p>\r\n\r\n    <p>\r\n        <button\r\n            class="btn btn-default"\r\n            *ngIf="!selected"\r\n            (click)="select()"\r\n        >Select</button>\r\n        <button\r\n            class="btn btn-default"\r\n            *ngIf="selected" \r\n            (click)="deselect()"\r\n        >Remove</button>   \r\n\r\n        <a class="btn btn-default" [routerLink]="[\'../flight-edit\', item.id, {showDetails: true}]">Edit</a>\r\n    </p>\r\n</div>\r\n\r\n{{ blink() }}'},XTe7:function(t,e){t.exports='\r\n<div class="col-sm-3" style="padding-top:70px">\r\n    <div class="card">\r\n        <ul class="nav nav-pills nav-stacked" style="margin-top:20px;">\r\n            <li><a [routerLink]="[\'./flight-search\']">Flight Search</a></li>\r\n            <li><a [routerLink]="[\'./passenger-search\']">Passenger Search</a></li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<div class="col-sm-9">\r\n        <router-outlet></router-outlet>\r\n</div>\r\n'},htyn:function(t,e){t.exports='<h1>Flight Edit</h1>\n<div class="card">\n  <p>Id: {{id}}</p>\n  <p>ShowDetails: {{showDetails}}</p>\n  \n  <pre>{{ flight | json }}</pre>\n\n  <div style="position:relative; z-index: 100" *ngIf="warningDialog.show" class="alert alert-warning">\n      <div>\n      Daten wurden nicht gespeichert! Trotzdem Maske verlassen?\n      </div>\n      <div>\n          <a href="javascript:void(0)" (click)="decide(true)" class="btn btn-danger">Yes</a>\n          <a href="javascript:void(0)" (click)="decide(false)" class="btn btn-default">No</a>\n      </div>\n  </div>\n\n\n\n\n</div>'},qgGl:function(t,e){t.exports='<h1>Flight Search</h1>\r\n\r\n<div class="row">\r\n<div class="card">\r\n<form roundTrip [formGroup]="filter">\r\n\r\n    <h2>Dynamic</h2>\r\n    <div class="form-group" *ngFor="let item of formMetadata">\r\n        <label>{{item.label}}</label>\r\n        <input \r\n            [formControlName]="item.name"\r\n            class="form-control">\r\n    </div>\r\n\r\n    <h2>Static</h2>\r\n\r\n    <div *ngIf="filter.hasError(\'roundTrip\')">... roundTrip ...</div>\r\n    <div *ngIf="filter.invalid">... Fehler auf Form-Ebene <pre>{{filter.errors | json }}</pre>...</div>\r\n\r\n    <div class="form-group">\r\n        <label>From:</label>\r\n        <input \r\n            formControlName="from"\r\n            class="form-control">\r\n\r\n        <div *ngIf="filter.controls[\'from\'].invalid && filter.controls[\'from\'].dirty">...Fehler <pre>{{ filter.controls[\'from\'].errors | json }}</pre>...</div>  \r\n        <div *ngIf="filter.controls[\'from\'].hasError(\'required\')">...Required...</div>  \r\n        <div *ngIf="filter.controls[\'from\'].hasError(\'minlength\')">...minlength...</div>  \r\n        <div *ngIf="filter.controls[\'from\'].hasError(\'maxlength\')">...maxlength...</div>  \r\n        <div *ngIf="filter.controls[\'from\'].hasError(\'pattern\')">...pattern...</div>  \r\n        <div *ngIf="filter.controls[\'from\'].hasError(\'city\')">...city...</div>  \r\n        <div *ngIf="filter.controls[\'from\'].hasError(\'asyncCity\')">...asyncCity...</div>  \r\n        <div *ngIf="filter.controls[\'from\'].pending"><marquee direction="down">Validiere</marquee></div>  \r\n\r\n    </div>\r\n    <div class="form-group">\r\n        <label>To:</label>\r\n        <input formControlName="to" class="form-control">\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <button \r\n            class="btn btn-default"\r\n            (click)="search()" \r\n            [disabled]="!filter.valid">Search</button>\r\n    </div>\r\n</form>\r\n\r\n</div>\r\n</div>\r\n\r\n<div class="row">\r\n    <div *ngFor="let f of flights" class="col col-lg-3 col-md-4 col-sm-6 col-xs-12">\r\n        <flight-card \r\n            [item]="f" \r\n            [(selected)]="basket[f.id]"></flight-card>\r\n            \x3c!-- (selectedChange)="basket[f.id] = $event" --\x3e\r\n    </div>\r\n</div>\r\n\x3c!--\r\n<div class="card">\r\n\r\n\r\n    <table class="table table-contensed">\r\n       \r\n        <tr *ngFor="let f of flights" [class.active]="f === selectedFlight">\r\n            <td>{{f.id}}</td>\r\n            <td>{{f.from | city:\'short\'}}</td>\r\n            <td>{{f.to | city:\'long\' }}</td>\r\n            <td>{{f.date | date:\'dd.MM.yyyy HH:mm\'}}</td>\r\n            <td><a (click)="select(f)">Select</a></td>\r\n        </tr>\r\n    </table>\r\n\r\n</div>\r\n--\x3e\r\n\r\n<div class="row">\r\n<div class="card">\r\n    <pre>{{ basket | json }}</pre>\r\n</div>\r\n</div>'},y5KD:function(t,e){}});