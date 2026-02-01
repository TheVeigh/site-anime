import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime',
  standalone: false,
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {

  // 👇 RECEBE OS ANIMES DO DESTAQUE
  @Input() animes: { id: string; title: string; imageUrl: string }[] = [];

  constructor(private router: Router) {}

  teste() {
    console.log('teste');
    this.router.navigate(['/destaque']);
  }
}
