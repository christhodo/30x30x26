import { Component, OnInit } from '@angular/core';
import { Kicker } from '@kicker-angular/api-interfaces';
import { KickersFacade } from '@kicker-angular/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'kicker-angular-kickers',
  templateUrl: './kickers.component.html',
  styleUrls: ['./kickers.component.scss'],
})
export class KickersComponent implements OnInit {
  allKickers$: Observable<Kicker[]> = this.kickersFacade.allKickers$;
  selectedKicker$: Observable<Kicker> = this.kickersFacade.selectedKicker$;

  constructor(private kickersFacade: KickersFacade) {}

  ngOnInit(): void {
    this.reset();
    this.kickersFacade.mutations$.subscribe((_) => this.reset());
  }

  reset() {
    this.loadKickers();
    this.selectKicker(null);
  }

  resetForm() {
    this.selectKicker(null);
  }

  selectKicker(kicker: Kicker) {
    this.kickersFacade.selectKicker(kicker?.id);
  }

  loadKickers() {
    this.kickersFacade.loadKickers();
  }

  saveKicker(kicker: Kicker) {
    this.kickersFacade.saveKicker(kicker);
  }

  deleteKicker(kicker: Kicker) {
    this.kickersFacade.deleteKicker(kicker);
  }
}
