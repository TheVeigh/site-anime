import { Component } from '@angular/core';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-destaque',
  standalone: false,
  
  templateUrl: './destaque.component.html',
  styleUrl: './destaque.component.css'
})
export class DestaqueComponent {
  animes: { id: string; title: string; imageUrl: string }[] = [];
  loading = true;

  constructor(private animeService: AnimeService) {}

  ngOnInit() {
   // 👈 carrega automático
  }

  olhaValor() {
    this.animeService.getAnimes().subscribe(data => {
      console.log(data);
      this.animes = data;
      this.loading = false;
    });
  }
}
