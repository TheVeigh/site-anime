import { provideHttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AnimeComponent } from './anime/anime.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { HeaderDestaqueAnimeComponent } from './header-destaque-anime/header-destaque-anime.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AnimeBoxComponent } from './anime-box/anime-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestaqueComponent,
    AnimeComponent,
    HeaderDestaqueAnimeComponent,
    AnimeBoxComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),

  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
