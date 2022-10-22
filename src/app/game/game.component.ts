import { Component, OnInit, ViewChild } from '@angular/core';
import { BoardComponent, Move } from '../board/board.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit
{

  @ViewChild(BoardComponent)
  public board!: BoardComponent;

  constructor() { }

  ngOnInit(): void { }
  

  public move: Move = null; 

  public winner: Move = null; 
  public result: string = '';

  public games: number = 0;
  public xScore: number = 0;
  public oScore: number = 0;

  public moveEvent($event: Move) {
    this.move = $event;
  }

  public winnerEvent($event: Move) {
    this.winner = $event;
    this.games++;
    if(this.winner === 'X') {
     this.xScore++;
     this.result = 'X won!';
    }
    else if(this.winner === 'O'){ 
      this.oScore++;
      this.result = 'O won!';
    }
    else if(this.winner === null && this.games > 0) {
      this.result = 'draw';
    }
  }

  public play(){
    this.winner = null;
    this.result = '';
    this.board.startGame();
  }
}
