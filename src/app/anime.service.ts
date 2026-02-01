import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Anime {
  id: string;
  title: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiUrl = 'https://api.jikan.moe/v4/anime';

  constructor(private http: HttpClient) {}

  getAnimes(): Observable<Anime[]> {
    return this.http.get<any>(this.apiUrl).pipe(

      // 👇 DEBUG (confirme no console)
      tap(res => {
        console.log('RESPOSTA JIKAN:', res);
        console.log('PRIMEIRO ITEM:', res.data?.[0]);
      }),

      map(res =>
        res.data.map((anime: any) => ({
          mal_id: anime.mal_id,                          // ✅ Jikan
          title: anime.title,                            // ✅ Jikan
          imageUrl: anime.images?.jpg?.large_image_url   // ✅ Jikan
        }))
      )
    );
  }
}
    