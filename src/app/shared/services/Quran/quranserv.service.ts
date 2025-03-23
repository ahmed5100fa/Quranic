import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuranservService {

  constructor(private _HttpClient:HttpClient) { }

  getAllQuran():Observable<any>{
    return this._HttpClient.get<any>(`http://api.alquran.cloud/v1/quran/quran-uthmani`);
  }
}
