import {Component, OnInit} from '@angular/core';
// @ts-ignore
import * as dataJson from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PruebaFront';
  data = dataJson.default.data;
  styleCard = 'Grid';

  ngOnInit(): void {
    console.log(dataJson.default.data);
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

}
