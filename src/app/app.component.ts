import {Component, OnInit} from '@angular/core';
import * as dataJson from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PruebaFront';
  data = dataJson.default.data;

  ngOnInit(): void {
    console.log(dataJson.default.data);
  }
}
