import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Api {
  private urlApi = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) { }
  /**
   * name
   */
  public getCaracters():Observable<any>{
    return this.http.get<any>(`${this.urlApi}`)
    
  }
}
