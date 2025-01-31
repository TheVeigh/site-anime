import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-anime',
  standalone: false,
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent {

  constructor( 
    private router: Router,
    private http: HttpClient // Injetando o HttpClient para fazer requisições
  ) {}

  ngOnInit(): void {

  }

  teste() {
    console.log('teste');
    this.router.navigate(['/destaque']); // Navegando para a rota '/destaque'
  }
}
