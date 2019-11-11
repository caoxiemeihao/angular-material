import { NgModule, ModuleWithProviders } from '@angular/core';
import { QuotesService } from './quotes.service';

@NgModule({
  imports: [
  ]
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        QuotesService
      ]
    }
  }
}
