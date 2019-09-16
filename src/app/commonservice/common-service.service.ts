import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {



  private apiURL: any = environment.siteURL;
  handleError: any;

  constructor(
    private http: HttpClient
  ) {}



  
  getdata(endpoint: string, param: any) {
    return this.http.get(`${this.apiURL + endpoint}`, httpOptions )
  }

  post(endpoint: string, data: any ) {
    console.log('Here Data : ', data);
    return this.http.post(`${this.apiURL + endpoint}`, data, httpOptions)
  }

  delete(endpoint: string, param: any ) {
    return this.http.delete(`${this.apiURL + endpoint + param}`, httpOptions )
  }



}
