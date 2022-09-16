import { NgModule } from '@angular/core';
import { AuthGuard } from '@kicker-angular/core-data';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { WildComponent } from 'libs/ui-login/src/lib/wild/wild/wild.component';
import { LoginComponent } from 'libs/ui-login/src/lib/login/login/login.component';
import { KickersComponent } from './kickers/kickers.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'kickers',
    canActivate: [AuthGuard],
    children: [{ path: '', component: KickersComponent }],
  },
  { path: 'wild', component: WildComponent },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
