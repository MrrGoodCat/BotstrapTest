import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError, concat, of } from 'rxjs';
// import 'rxjs/add/observable/throw';
// import 'rxjs/add/observable/of';
import { Environment } from './environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {
  constructor(private http: Http,
              protected httpClient: HttpClient) {}

  private baseUrl = 'http://localhost:8080/api/environments';

  // public getEnvironments(): Observable<Environment[]> {
  //   return this.http
  //     .get(this.baseUrl)
  //     .pipe(map(this.extractData))
  //     .pipe(tap(data => console.log('getProducts: ' + JSON.stringify(data))))
  //     .pipe(catchError(this.handleError));
  // }

  public getEnvironments(): Observable<Environment[]> {
    return this.httpClient.get<Environment[]>(this.baseUrl);
  }

  public getEnvironment(id: number): Observable<Environment> {
    return this.httpClient.get<Environment>(`${this.baseUrl}/${id}`);
  }

  private extractData(response: Response) {
    const body = response.json();
    return body.data || {};
  }

  private handleError(error: Response): Observable<any> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    // console.error(error);
    // return Observable.throw(error.json().error || 'Server error');

    const result = concat(of(error), throwError(new Error('oops!')));
    result.subscribe(x => console.log(x), e => console.error(e));
    return result;
  }
}
