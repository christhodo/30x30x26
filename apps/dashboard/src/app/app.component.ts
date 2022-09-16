import { Component } from '@angular/core';
import { AuthGuardService } from '@kicker-angular/core-data';

@Component({
  selector: 'kicker-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = '';

  links = [{ path: '/kickers', icon: 'view_list', title: 'Kickers' }];

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthGuardService) {}
}
