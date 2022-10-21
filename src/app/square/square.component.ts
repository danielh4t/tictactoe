import { Component, OnInit, Input } from '@angular/core';
import { Move } from '../board/board.component';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public move: Move = null;


}
