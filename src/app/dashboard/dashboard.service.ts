import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import { Environment } from './environment';

@Injectable()
export class DashboardService {
  constructor(private http: Http) {}

  private baseUrl = 'api/environments';

  getEnvironments(): Observable<Environment[]> {
    return this.http
      .get(this.baseUrl)
      .pipe(map(this.extractData))
      .pipe(tap(data => console.log('getProducts: ' + JSON.stringify(data))))
      .pipe(catchError(this.handleError));
  }

  private extractData(response: Response) {
    let body = response.json();
    return body.data || {};
  }

  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
