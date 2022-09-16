import { Injectable } from '@angular/core';
import { Kicker } from '@kicker-angular/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/dashboard/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KickersService {
  model = 'kickers';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Kicker[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Kicker>(this.getUrlWithId(id));
  }

  create(kicker: Kicker) {
    return this.http.post(this.getUrl(), kicker);
  }

  update(kicker: Kicker) {
    return this.http.put(this.getUrlWithId(kicker.id), kicker);
  }

  delete(kicker: Kicker) {
    return this.http.delete(this.getUrlWithId(kicker.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
