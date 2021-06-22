import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss']
})
export class GridCardComponent implements OnInit {

  constructor() {
  }

  @Input() personajeData: any = '';
  @Input() mobile = false;
  thumbSelect = '';
  stateVote = false;

  ngOnInit(): void {
  }

  getPercentege = (data, type: string) => ((data.votes[type] / (data.votes.positive + data.votes.negative)) * 100).toFixed(1);


  differenceTime(date: Date): string {
    const diffTime = new Date().getTime() - new Date(date).getTime();
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const month = Math.round(days / 30);
    if (days < 30) {
      return days + (days < 2 ? ' day' : 'days');
    } else if (month < 12) {
      return month + (month < 2 ? ' month' : ' months');
    } else {
      return (month / 12).toFixed(0) + ((month / 12) < 2 ? ' year' : ' years');
    }
  }

  votar(): void {
    if (this.thumbSelect !== '') {
      console.log(this.personajeData);
      this.personajeData.votes[this.thumbSelect]++;
      this.stateVote = true;
    }
  }
}
