import { Component, OnInit } from '@angular/core';
import { Movie, movieList, Submit } from 'src/app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  
  submit: Submit = new Submit();
  randoMovie:  Movie = new Movie();
  show: boolean = false;
  guess: Movie = new Movie();
  answer?: string;

  movies = movieList;
  
  
  constructor() {}

  getRandoMovie() { 
  return this.movies[Math.floor(Math.random() * movieList.length)];
  }

  ngOnInit(): void {
    this.randoMovie = this.getRandoMovie();
  }


 
 

  submission(){ 
  //if input == true (matches matching string in array?) when submit is hit then refresh and new hint appear  
  if (this.guess.name?.toLowerCase() === this.randoMovie.name?.toLowerCase() ) {
  this.answer = 'correct';
  this.guess = new Movie();

   }
   else { 
     this.answer = 'not correct!';
    
   }
   this.answer = ' ';
   this.randoMovie = this.getRandoMovie();
   this.show = false;
  }

hint() { 
  this.show = !this.show;
  }
}
