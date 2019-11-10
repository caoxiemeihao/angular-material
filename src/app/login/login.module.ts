import { NgModule } from '@angular/core';
import { ShareModule } from '../shared/share.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    ShareModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
