import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    ShareModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
