import { Component, OnInit, ViewChild } from '@angular/core';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  @ViewChild(BoardComponent) 
  private board!: BoardComponent ;

  constructor() { }

  ngOnInit(): void {  }

  public start() {
    this.board.startGame()
   }

}
