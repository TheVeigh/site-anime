import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  valorDinamicoDestaqueAnime: boolean = true;

  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {

  }

  onValorDinamicoChange(novoValor: boolean) {
    this.valorDinamicoDestaqueAnime = novoValor;
  }
}
