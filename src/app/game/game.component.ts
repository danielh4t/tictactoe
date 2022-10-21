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

  public xScore: number = 0;
  public oScore: number = 0;

  public moveEvent($event: Move) {
    this.move = $event;
  }

  public winnerEvent($event: Move) {
    this.winner = $event;
    if(this.winner === 'X') this.xScore++;
    if(this.winner === 'O') this.oScore++;
  }

  public get winnerText(): string {
    if(this.winner === 'X') return 'X won'
    if(this.winner === 'O') return 'O won'
    return '';
  }

  public play(){
    this.winner = null;
    this.board.startGame();
  }
}
