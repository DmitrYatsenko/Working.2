import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable'
import  'rxjs/add/operator/map';
@Injectable()
export class FilmCardService {
    url: string = "http://www.omdbapi.com?page=1&s="
  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    return body.Search || {};
  }

  getFilms (filmName: string) {
      return this.http.get(this.url + filmName +"&apikey=520bbe17").map(this.extractData);
  }


}
