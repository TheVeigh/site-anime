import { Component, OnInit } from '@angular/core';
import { AnimeService, Anime } from '../anime.service';

@Component({
  selector: 'app-destaque',
  standalone: false,

  templateUrl: './destaque.component.html',
  styleUrl: './destaque.component.css'
})
export class DestaqueComponent implements OnInit {
  animes: Anime[] = [];
  loading = true;

  constructor(private animeService: AnimeService) {}

  ngOnInit() {
   this.olhaValor();  // 👈 AGORA carrega automático
  }

  olhaValor() {
    this.animeService.getAnimes().subscribe(data => {
      console.log(data);
      this.animes = data;
      this.loading = false;
    });
  }
}
