import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, tap, mergeMap } from 'rxjs/operators';

export interface Anime {
  mal_id: string;
  title: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl = 'https://api.jikan.moe/v4/top/anime';

  constructor(private http: HttpClient) {}

  getAnimes(): Observable<Anime[]> {
    // Faz duas requisições: página 1 e página 2, cada uma com 25 animes (total 50)
    const page1$ = this.http.get<any>(`${this.apiUrl}?limit=25&page=1`);
    const page2$ = this.http.get<any>(`${this.apiUrl}?limit=25&page=2`);

    return forkJoin([page1$, page2$]).pipe(
      tap(responses => {
        console.log('RESPOSTA JIKAN Página 1:', responses[0]);
        console.log('RESPOSTA JIKAN Página 2:', responses[1]);
        console.log('TOTAL DE ANIMES:', responses[0].data.length + responses[1].data.length);
      }),
      map(responses => {
        // Combina os dados das duas páginas
        const allData = [...responses[0].data, ...responses[1].data];
        return allData.map((anime: any) => ({
          mal_id: anime.mal_id,
          title: anime.title,
          imageUrl: anime.images?.jpg?.large_image_url
        }));
      })
    );
  }
}
