import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroisService {
private _jsonHeroes = 'assets/herois.json'

  constructor(
    private http : HttpClient
  ) {}

  getHerois ():Observable<any> {
    return this.http.get(this._jsonHeroes)
  }
}
