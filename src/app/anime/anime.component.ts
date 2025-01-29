import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime',
  standalone: false,
  
  templateUrl: './anime.component.html',
  styleUrl: './anime.component.css'
})
export class AnimeComponent {


    constructor(
      private router: Router,
    ) {}
  
    ngOnInit(): void {
  
    }
  
    teste(){
      console.log('teste')
      this.router.navigate(['/destaque']);
    }

}
