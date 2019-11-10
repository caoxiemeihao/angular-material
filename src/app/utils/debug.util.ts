import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

declare module 'rxjs' {
  interface Observable<T> {
    debug: (arg0: any) => Observable<T>;
  }
}

Observable.prototype.debug = function(message) {
  return this.do(
    next => {
      if (!environment) {
        console.log(message, next);
      }
    },
    err => {
      if (!environment) {
        console.log('ERROR>>', message, err);
      }
    },
    () => {
      if (!environment) {
        console.log(message, 'completed -');
      }
    }
  )
};
