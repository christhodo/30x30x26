import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Kicker } from '@kicker-angular/api-interfaces';

@Component({
  selector: 'kicker-angular-kickers-list',
  templateUrl: './kickers-list.component.html',
  styleUrls: ['./kickers-list.component.scss'],
})
export class KickersListComponent {
  @Input() kickers: Kicker[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
