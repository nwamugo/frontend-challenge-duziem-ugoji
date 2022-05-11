import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, timeoutWith } from 'rxjs/operators'
import { ApiResponse } from '../../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = "https://api.m3o.com/v1";
  private _actionUrl: string;
  private timeOut: number;


  constructor(private http: HttpClient) {
    this.timeOut = 60000;
  }

  /**
   * HTTP POST call
   * 
   * @param {*} input
   * @returns {Observable<ApiResponse>}
   * @memberof HttpService
   */
  public post(input: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}${this._actionUrl}`, input)
    .pipe(
      timeoutWith(this.timeOut, this.handleTimeout()),
      catchError(this.handleError([]))
    )
  }


  /**
   * Sets the action url for the current request
   *
   * @param {string} actionUrl
   * @param {string} [path='']
   * @memberof BaseProvider
   */
  public setActionUrl(actionUrl: string, path: string = '') {
    this._actionUrl = `${actionUrl}${path}`;
  }

  /**
   *
   * @private
   * @returns {Observable<any>}
   * @memberof HttpService
   */
  private handleTimeout(): Observable<any> {
    return new Observable(obs => obs.error({ error: { message: 'Request timed out' } }));
  }

  /**
   *
   * @private
   * @param {*} [result]
   * @returns
   * @memberof HttpService
   */
  private handleError(result?: any) {
    return (error: any): Observable<any> => {
      console.error({ error: { message: `Request failed: ${error.message}` } });

      return of(result as any);
    }
  }
}
