import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Kicker } from '@kicker-angular/api-interfaces';

@Component({
  selector: 'kicker-angular-kicker-details',
  templateUrl: './kicker-details.component.html',
  styleUrls: ['./kicker-details.component.scss'],
})
export class KickerDetailsComponent {
  currentKicker: Kicker;
  originalTitle = '';
  @Input() set kicker(value: Kicker) {
    if (value) this.originalTitle = value.title;
    this.currentKicker = { ...value };
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
