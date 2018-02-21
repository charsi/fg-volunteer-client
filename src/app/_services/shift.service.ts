import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Shift } from '../_models/shift';
import { environment } from '../../environments/environment';

import { AuthService } from '../_services/auth.service';

@Injectable()
export class ShiftService {
  private apiHost:string;
    
  constructor(private http: HttpClient, private auth:AuthService) {
      this.apiHost = environment.API_URL+'/shifts/';
  }

  loadCurrent() {
    return this.http.get<Shift[]>(this.apiHost);
}

getById(id: string) {
  return this.http.get<Shift>(this.apiHost + id).catch((err) => {
    this.auth.forceLogout();
    return Observable.throw(err);});
}

findAll() {
    return this.http.get<Shift[]>(this.apiHost).catch((err) => {
      this.auth.forceLogout();
      return Observable.throw(err);});
  }

create(shift: Shift) {
    return this.http.post(this.apiHost, shift);
}

update(shift: Shift) {
    return this.http.put(this.apiHost + shift.id, shift);
}

delete(id: number) {
    return this.http.delete(this.apiHost + id);
}

}
