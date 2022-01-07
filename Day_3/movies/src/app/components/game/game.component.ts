import { Component, OnInit } from '@angular/core';
import { Submit } from 'src/app/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }

  submit: Submit = new Submit(); 


  // prob need array for hints
 // hints: 
 
  
  submission(){ 
  //if input == true (matches matching string in array?) when submit is hit then refresh and new hint appear  
      this.submit = new Submit() //or need new function?
    //if input == false, make text bar empty until it is correct
  }
}
