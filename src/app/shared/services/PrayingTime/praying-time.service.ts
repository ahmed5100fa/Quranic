import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Praytimeinter } from '../../interfaces/praytimeinter';

@Injectable({
  providedIn: 'root'
})
export class PrayingTimeService {

  constructor(private _HttpClient:HttpClient) { }

  getPrayingTime(time:string):Observable <Praytimeinter>{
    return this._HttpClient.get<Praytimeinter>(`https://api.aladhan.com/v1/timingsByCity/${time}?city=Cairo&country=Egypt&method=2`);
  }
}
