import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { QuotesService } from 'src/app/service/quotes.service';
import { Quotes } from '../../domain/quotes.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  quote: Quotes = {
    "id": "1",
    "cn": "问渠那得清如许，为有源头活水来",
    "pic": "/assets/img/quotes/1.jpeg",
    "en": "Asked him that so clear, as there is water flowing"
  };

  constructor(
    private fb: FormBuilder,
    private quotesService$: QuotesService
  ) {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
    this.quotesService$.getQuotes().subscribe(q => {
      this.quote = q;
    });
  }

  ngOnInit() { }

  handleSubmit({ value, valid }, ev: Event) {
    ev.preventDefault();

    console.log(value, valid);
  }

}
