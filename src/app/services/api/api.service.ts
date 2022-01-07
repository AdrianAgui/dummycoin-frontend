import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  delete<T>(
    url: string,
    options?: any
  ): Observable<T> | Observable<HttpEvent<T>> {
    return this.http.delete<T>(url, options).pipe(
      catchError((err) => {
        console.error('Error on request: ' + url, err);
        return throwError(() => new Error(err));
      })
    );
  }

  get<T>(url: string, options?: any): Observable<T> | Observable<HttpEvent<T>> {
    return this.http.get<T>(url, options).pipe(
      catchError((err) => {
        console.error('Error on request: ' + url, err);
        return throwError(() => new Error(err));
      })
    );
  }

  post<T>(
    url: string,
    body: any | null,
    options?: any
  ): Observable<T> | Observable<HttpEvent<T>> {
    return this.http.post<T>(url, body, options).pipe(
      catchError((err) => {
        console.error('Error on request: ' + url, err);
        return throwError(() => new Error(err));
      })
    );
  }

  put<T>(
    url: string,
    body: any | null,
    options?: any
  ): Observable<T> | Observable<HttpEvent<T>> {
    return this.http.put<T>(url, body, options).pipe(
      catchError((err) => {
        console.error('Error on request: ' + url, err);
        return throwError(() => new Error(err));
      })
    );
  }
}
