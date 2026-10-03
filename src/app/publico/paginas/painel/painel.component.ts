import { Component, OnInit } from '@angular/core';
import { HeroisService } from '../serviços/herois.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {
  heroes: string[] = [];
  searchTerm = '';
  loading = true;
  error = '';

  constructor(private heroisService: HeroisService) {}

  get filteredHeroes(): string[] {
    const query = this.searchTerm.trim().toLocaleLowerCase();
    return this.heroes.filter((hero) =>
      hero.toLocaleLowerCase().includes(query)
    );
  }

  ngOnInit(): void {
    this.heroisService.getHerois().subscribe({
      next: (heroes) => {
        this.heroes = heroes;
        this.loading = false;
      },
      error: () => {
        this.error = 'Não foi possível carregar a lista de campeões.';
        this.loading = false;
      }
    });
  }
}
