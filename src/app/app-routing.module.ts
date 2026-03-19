import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnimeComponent } from './anime/anime.component';
import { FooterComponent } from './footer/footer.component';
import { AreaAnimeComponent } from './area-anime/area-anime.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'destaque' },
  { path: 'destaque', component: HomeComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'area-anime', component: AreaAnimeComponent },
  { path: 'footer', component: FooterComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
