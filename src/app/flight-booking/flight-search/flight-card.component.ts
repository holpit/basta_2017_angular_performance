
import { Flight } from '../../entities/flight';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent implements OnInit {

    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    constructor(
        private element: ElementRef,
        private zone: NgZone
      ) { }

    ngOnInit() { }

    select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }

    blink() {
        // Dirty Hack used to visualize the change detector
        this.element.nativeElement.firstChild.style.backgroundColor = 'crimson';
    
        // Bypass the change tracker to avoid infinity cycles when 
        // visualizing the change tracking process
        this.zone.runOutsideAngular(() => {
          setTimeout(() => {
            this.element.nativeElement.firstChild.style.backgroundColor = 'lightsteelblue';
          }, 1000);
        });
    
        return null;
      }
}