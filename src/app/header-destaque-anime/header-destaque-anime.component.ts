import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-destaque-anime',
  standalone: false,
  
  templateUrl: './header-destaque-anime.component.html',
  styleUrl: './header-destaque-anime.component.css'
})
export class HeaderDestaqueAnimeComponent {
  valorDinamicoDestaqueAnime: boolean = true;
  @Output() valorDinamicoChange = new EventEmitter<boolean>(); // Para emitir o valor

  constructor(
    private router: Router,
  ) {}

  anime(){
    this.valorDinamicoDestaqueAnime = false;
    this.valorDinamicoChange.emit(this.valorDinamicoDestaqueAnime); // Emitindo o valor para o pai

  }

  destaque(){
    this.valorDinamicoDestaqueAnime = true
    this.valorDinamicoChange.emit(this.valorDinamicoDestaqueAnime); // Emitindo o valor para o pai
  }
}
