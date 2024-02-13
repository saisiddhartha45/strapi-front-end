import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getList():Observable<any>{
      return this.http.get(`http://localhost:1337/api/lists`)
    }
  getColors():Observable<any>{
    return this.http.get(`http://localhost:1337/api/colors`)
  }
}
