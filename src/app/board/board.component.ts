import { Component, OnInit } from '@angular/core';


export type Move = 'X' | 'O' | null;

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  public squares: Move[] = Array(9).fill(null);
  private _turn: Move = null;


  constructor() { }

  ngOnInit(): void {
  }

  public get turn() {
    return this._turn;
  }

  public move(index: number): void {
  }

}
