import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculadorService {
  private apiUrl = 'http://localhost:5000/presupuesto'

  constructor(private http: HttpClient) { }

  getPresupuestos(): Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
}
