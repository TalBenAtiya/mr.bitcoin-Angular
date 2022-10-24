import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient) { }


  public getCoinRate() {
    console.log('hi');
    
    const result = this.http.get<{ USD: { last: number } }>('https://blockchain.info/ticker')
      .pipe(
        map(res => res.USD.last)
      )
      console.log('result:', result)
      return result
  }
}