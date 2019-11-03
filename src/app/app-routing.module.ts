import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginModule } from './login/login.module';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'project', redirectTo: '/project', pathMatch: 'full' },
  { path: 'task-list', redirectTo: '/task-list', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    // LoginModule, // 放这里也是可以用的，现在移动到 app.module.ts 中
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
