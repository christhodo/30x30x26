import { Component, OnInit } from '@angular/core';
import { Kicker } from '@kicker-angular/api-interfaces';
import { Observable } from 'rxjs';
import { KickersService } from '@kicker-angular/core-data';

@Component({
  selector: 'kicker-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  kickers$: Observable<Kicker[]>;

  constructor(private kickersService: KickersService) {}

  ngOnInit(): void {
    this.loadKickers();
  }

  loadKickers() {
    this.kickers$ = this.kickersService.all();
  }
}
