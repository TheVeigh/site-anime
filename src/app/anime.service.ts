import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Anime {
  title: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  // Usando a URL de todos os animes
  private apiUrl = 'https://kitsu.io/api/edge/anime';

  constructor(private http: HttpClient) { }

  getAnimes(): Observable<Anime[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response =>
        response.data.map((anime: any) => ({
          title: anime.attributes.canonicalTitle,
          imageUrl: anime.attributes.posterImage.large
        }))
      )
    );
  }
}
