import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

interface ChampionData {
  data: Record<string, { id: string; name: string }>;
}

@Injectable({ providedIn: 'root' })
export class HeroisService {
  private readonly jsonHeroes = 'assets/herois.json';

  constructor(private http: HttpClient) {}

  getHerois(): Observable<string[]> {
    return this.http.get<ChampionData>(this.jsonHeroes).pipe(
      map((catalog) => Object.values(catalog.data).map((champion) => champion.name))
    );
  }
}
