import { Component } from '@angular/core';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-destaque',
  standalone: false,
  
  templateUrl: './destaque.component.html',
  styleUrl: './destaque.component.css'
})
export class DestaqueComponent {
  animes: any[] = [];  // Array para armazenar os dados dos animes
  loading = true;  // Variável para controle de carregamento
  private animeData = {
    "data": [
      {
        "attributes": {
          "abbreviatedTitles": ["COWBOY BEBOP"],
          "ageRating": "R",
          "ageRatingGuide": "17+ (violence & profanity)",
          "averageRating": "82.23",
          "canonicalTitle": "Cowboy Bebop",
          "coverImage": {
            "large": "https://media.kitsu.app/anime/1/cover_image/large-88da0208ac7fdd1a978de8b539008bd8.jpeg",
            "original": "https://media.kitsu.app/anime/1/cover_image/fb57e5f25616633a41f0f5f1ded938ee.jpeg",
            "small": "https://media.kitsu.app/anime/1/cover_image/small-33ff2ab0f599bc15ed73856ecd13fe71.jpeg",
            "tiny": "https://media.kitsu.app/anime/1/cover_image/tiny-1f92cfe65c1b31d8b47e36f025d32b35.jpeg"
          },
          "description": "In the year 2071, humanity has colonized several of the planets...",
          "startDate": "1998-04-03",
          "endDate": "1999-04-24",
          "episodeCount": 26,
          "episodeLength": 25,
          "status": "finished",
          "posterImage": {
            "large": "https://media.kitsu.app/anime/poster_images/1/large.jpg"
          }
        },
        "id": "1"
      }
    ]
  };
  constructor(private animeService: AnimeService) { }

  olhaValor(){
    console.log('cabeça', this.animeData)
    this.animeService.getAnimes().subscribe(
      (data) => {
        console.log('AI O VALOR VITIN', data)
        // Quando os dados chegam, guardamos no array
        this.animes = data;
        this.loading = false;  // Atualiza o estado de carregamento
      },
      (error) => {
        console.error('Erro ao carregar os animes:', error);
        this.loading = false;
      }
    );
  }
}
