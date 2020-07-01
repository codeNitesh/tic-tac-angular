import { Component } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TIC TAK';

  winMessage = ''
  turn = 'cross'
  cards: string[] = new Array(9).fill('empty');

  handleClick(index: number){
    if(this.winMessage){
      // return that someone has already won!!!
      return
    }
    if(this.cards[index] != "empty"){
      // return that someone has already used this slot.
      return
    }

    if(this.turn == "cross"){
      this.cards[index] = "cross"
      this.turn = "circle"
    }else{
      this.cards[index] = "circle"
      this.turn = "cross"
    }

    this.checkIsWinner();
  }

  checkIsWinner(){
    // horizontal logic
    if(
      this.cards[0] == this.cards[1] &&
      this.cards[0] == this.cards[2] &&
      this.cards[0] != 'empty'
     ){
       this.winMessage = `${this.cards[0].toUpperCase()} won!`;
     }

     if(
      this.cards[3] == this.cards[4] &&
      this.cards[3] == this.cards[5] &&
      this.cards[3] != 'empty'
     ){
       this.winMessage = `${this.cards[3].toUpperCase()} won!`;
     }

     if(
      this.cards[6] == this.cards[7] &&
      this.cards[6] == this.cards[8] &&
      this.cards[6] != 'empty'
     ){
       this.winMessage = `${this.cards[6].toUpperCase()} won!`;
     }

     // vertical logic
     if(
      this.cards[0] == this.cards[3] &&
      this.cards[0] == this.cards[6] &&
      this.cards[0] != 'empty'
     ){
       this.winMessage = `${this.cards[0].toUpperCase()} won!`;
     }

     if(
      this.cards[1] == this.cards[4] &&
      this.cards[1] == this.cards[7] &&
      this.cards[1] != 'empty'
     ){
       this.winMessage = `${this.cards[1].toUpperCase()} won!`;
     }

     if(
      this.cards[2] == this.cards[5] &&
      this.cards[2] == this.cards[8] &&
      this.cards[2] != 'empty'
     ){
       this.winMessage = `${this.cards[2].toUpperCase()} won!`;
     }

     // digonal logic
     if(
      this.cards[0] == this.cards[4] &&
      this.cards[0] == this.cards[8] &&
      this.cards[0] != 'empty'
     ){
       this.winMessage = `${this.cards[0].toUpperCase()} won!`;
     }

     if(
      this.cards[2] == this.cards[4] &&
      this.cards[2] == this.cards[6] &&
      this.cards[2] != 'empty'
     ){
       this.winMessage = `${this.cards[2].toUpperCase()} won!`;
     }
  }

  reloadGame(){
    this.winMessage='';
    this.turn = '';
    this.cards = new Array(9).fill('empty');
  }
}
