import { Injectable, Inject } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Quotes } from '../domain/quotes.model';

@Injectable()
export class QuotesService {
  constructor(
    private http: HttpClient,
    @Inject('BASE_CONFIG') private config,
  ) { }

  getQuotes(): Observable<Quotes> {
    const uri = `${this.config.uri}/quotes/${Math.ceil(Math.random() * 4)}`;
    return this.http.get(uri).pipe(map(quote => quote as Quotes));
  }
}