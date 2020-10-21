import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor( private http: HttpClient) { }

  getData():Observable<any>{
    return this.http.get('https://raw.githubusercontent.com/royts/israel-cities/master/israel-cities.json');
    
    
  }
}
