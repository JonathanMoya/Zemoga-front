import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getAllData(): any {
    return this.http.get<any>('http://localhost:3000');
  }

  updateData(data): any {
    console.log(data);
    return this.http.post<any>('http://localhost:3000/update', data, {responseType: 'json'});
  }
}
