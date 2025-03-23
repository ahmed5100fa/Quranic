import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SurahName, TafseerAyah, TafseerName } from '../../interfaces/tafseer-inter';

@Injectable({
  providedIn: 'root'
})
export class TafseerService {

  constructor(private _HttpClient:HttpClient) { }

  getSurahName() :Observable<SurahName>{
    return this._HttpClient.get<SurahName>('http://api.quran-tafseer.com/quran/');
  }

  getTafseerbyAyahNumber(tafseer_id : number,sura_number: number,AyahNumber: number):Observable<TafseerAyah>{
    return this._HttpClient.get<TafseerAyah>(`http://api.quran-tafseer.com/tafseer/${tafseer_id}/${sura_number}/${AyahNumber}`)
  }

  getTafseerName ():Observable<TafseerName>{
    return this._HttpClient.get<TafseerName>(`http://api.quran-tafseer.com/tafseer/`)
  }

}
