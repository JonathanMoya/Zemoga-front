import {Component, OnInit} from '@angular/core';
import {DataService} from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  data = [];
  styleCard = 'List';

  constructor(private serviceHttp: DataService) {
  }

  ngOnInit(): void {
    this.serviceHttp.getAllData().subscribe(res => {
      this.data = res;
    });
  }
}
