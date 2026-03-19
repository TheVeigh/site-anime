import { Component, OnInit } from '@angular/core';
import { AnimeService, Anime } from '../anime.service';

@Component({
  selector: 'app-area-anime',
  standalone: false,

  templateUrl: './area-anime.component.html',
  styleUrl: './area-anime.component.css'
})
export class AreaAnimeComponent implements OnInit {
  animes: Anime[] = [];
  loading: boolean = true;

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getAnimes().subscribe({
      next: (animes) => {
        this.animes = animes;
        this.loading = false;
      },
      error: (error) => {
        console.error('Erro ao carregar animes:', error);
        this.loading = false;
      }
    });
  }
}
