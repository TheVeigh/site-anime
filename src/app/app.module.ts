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
import { FooterComponent } from './footer/footer.component';
import { AreaAnimeComponent } from './area-anime/area-anime.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestaqueComponent,
    AnimeComponent,
    HeaderDestaqueAnimeComponent,
    FooterComponent,
    AreaAnimeComponent,
    
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
