import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BaseApi {
  // private baseUrl = 'http://localhost:3330/';
  private baseUrl = 'http://api.elitproektbud.com.ua/api/';
  // private token = document.querySelector('meta[name=csrf-token]').getAttribute('content');


  constructor(public http: HttpClient) {}

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url));
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    // return this.http.post(this.getUrl(url), data, this.getToken());
    return this.http.post(this.getUrl(url), data);
  }

  public put(url: string = '', data: any = {}): Observable<any > {
    return this.http.put(this.getUrl(url), data);
    // return this.http.put(this.getUrl(url), data, this.getToken());
  }

  public delete(url: string = ''): Observable<any> {
    return this.http.delete(this.getUrl(url));
    // return this.http.delete(this.getUrl(url), this.getToken());
  }

  // private getToken() {
  //   return {
  //     headers: new HttpHeaders({
  //       'X-CSRF-TOKEN': this.token
  //     })
  //   };
  // }
}
