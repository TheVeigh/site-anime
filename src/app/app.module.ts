import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DestaqueComponent } from './destaque/destaque.component';
import { AnimeComponent } from './anime/anime.component';
import { HeaderDestaqueAnimeComponent } from './header-destaque-anime/header-destaque-anime.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DestaqueComponent,
    AnimeComponent,
    HeaderDestaqueAnimeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
