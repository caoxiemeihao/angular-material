import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TaskHomeComponent } from './task-home/task-home.component';

const routes = [
  { path: 'task-list', component: TaskHomeComponent, }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TaskRoutingModule {}
