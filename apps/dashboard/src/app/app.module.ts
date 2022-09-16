import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@kicker-angular/core-data';
import { CoreStateModule } from '@kicker-angular/core-state';
import { EnvironmentModule } from '@kicker-angular/environment';
import { MaterialModule } from '@kicker-angular/material';
import { UiLoginModule } from '@kicker-angular/ui-login';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { KickerDetailsComponent } from './kickers/kicker-details/kicker-details.component';
import { KickersListComponent } from './kickers/kickers-list/kickers-list.component';
import { KickersComponent } from './kickers/kickers.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    KickersComponent,
    KickersListComponent,
    KickerDetailsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CoreDataModule,
    CoreStateModule,
    EnvironmentModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    RoutingModule,
    UiLoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
