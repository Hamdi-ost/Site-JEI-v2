import { Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DelayResolverService implements Resolve<Observable<any>> {

  constructor() {
  }

  resolve(): any {
    return timer(1000);  }
}
