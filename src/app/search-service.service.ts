import { Injectable, ɵConsole } from '@angular/core';
import { DonarInterface } from './donar-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const URL = 'http://localhost:3000/donarData';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  findAll():Observable<DonarInterface[]>
   {
      return this.http.get<DonarInterface[]>("http://localhost:3000/donarData");
   }
// Search the data
   getDonar(bloodGroup: string): Observable<DonarInterface[]>  {
    const endpoint = `${URL}?bloodGroup=${bloodGroup}`;
    console.log(endpoint);
    return this.http.get<DonarInterface[]>(endpoint, httpOptions);
  }
  // add the donar
  add(donor:DonarInterface): Observable<DonarInterface> {

    const headers = new HttpHeaders().set('content-type', 'application/json');
    
    return this.http.post<DonarInterface>('http://localhost:3000/donarData/', donor,{headers});
    
  }
}
