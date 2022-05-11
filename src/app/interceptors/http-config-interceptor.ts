import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { HelperService } from '../services/helper/helper.service';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  constructor(
    private helper: HelperService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = environment.M3O_API_TOKEN;

    // set token value into header
    if (token) {
      const headers = req.headers.set("Authorization", `Bearer ${token}`);
      req = req.clone({ headers });
    }

    if (!req.headers.has('Content-Type')) {
      const headers = req.headers.set("content-type", 'application/json');
      req = req.clone({ headers })
    }

    const headers = req.headers.set('Accept', 'application/json')
    req = req.clone({ headers })

    this.helper.showLoader('Processing Server Request')
    return next.handle(req)
      .pipe(map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event==>', event)
        }
        this.helper.hideLoader();
        return event
      }), catchError((error: HttpErrorResponse) => {
        this.helper.hideLoader();
        console.error(error);
        return throwError(error);
      }));
  }
}
