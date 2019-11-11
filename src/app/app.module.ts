import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { ServiceModule } from './service/service.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    TaskModule,
    ServiceModule.forRoot(),
    BrowserAnimationsModule, // 放最后，避免可能的 BUG
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
