import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class BaseApi {

  private baseUrl = 'http://api.elitproektbud.com.ua/api/';

  constructor(public http: HttpClient) {}

  private getUrl(url: string = ''): string {
    return this.baseUrl + url;
  }

  public get(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url));
  }

  public post(url: string = '', data: any = {}): Observable<any> {
    return this.http.post(this.getUrl(url), data);
  }

  public put(url: string = '', data: any = {}): Observable<any > {
    return this.http.put(this.getUrl(url), data);
  }

  public delete(url: string = ''): Observable<any> {
    return this.http.delete(this.getUrl(url));
  }
}
