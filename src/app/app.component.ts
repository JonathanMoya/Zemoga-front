import {Component, OnInit} from '@angular/core';
// @ts-ignore
import * as dataJson from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data = dataJson.default.data;
  styleCard = 'List';

  ngOnInit(): void {
    console.log(dataJson.default.data);
  }
}
