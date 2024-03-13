import { Injectable } from '@angular/core';
import { Observable, map, takeWhile, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountDownService {

  constructor() { }

  getRemainingTimeObservable(endTime:string):Observable<any> {
    
    return timer(0, 1000).pipe(
      map(() => {
        const total = Date.parse(endTime) - Date.parse(new Date().toString());
        const seconds =  Math.floor((total / 1000) % 60);
        const minutes =  Math.floor((total / 1000 / 60) % 60);

        return {total, seconds, minutes}
      }),
      takeWhile(({ total }) => total >= 0, true)
    )
  }
}
