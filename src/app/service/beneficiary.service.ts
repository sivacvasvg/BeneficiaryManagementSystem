import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  constructor(private _http: HttpClient ) { }
  addBeneficiary(data: any): Observable<any> {
    return this._http.post('https://646e1ad39c677e23218b16c9.mockapi.io/indusspay/api/v1/beneficiary', data);
  }

  updateBeneficiary( data: any): Observable<any> {
    return this._http.put(`https://646e1ad39c677e23218b16c9.mockapi.io/indusspay/api/v1/beneficiary/${data.id}`, data);
  }

  getBeneficiary(): Observable<any> {
    return this._http.get('https://646e1ad39c677e23218b16c9.mockapi.io/indusspay/api/v1/beneficiary');
  }

  deleteBeneficiary(id: number): Observable<any> {
    return this._http.delete(`https://646e1ad39c677e23218b16c9.mockapi.io/indusspay/api/v1/beneficiary/${id}`);
  }
  getById(id: number) {
    return this._http.get<any>(`https://646e1ad39c677e23218b16c9.mockapi.io/indusspay/api/v1/beneficiary/${id}`);
   }
}
