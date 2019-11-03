import { NgModule } from "@angular/core";
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskRoutingModule } from './task-routing.module';
import { ShareModule } from '../share/share.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';


@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskHeaderComponent,
    TaskListComponent,
    TaskItemComponent,
    NewTaskComponent,
    CopyTaskComponent,
  ],
  imports: [
    TaskRoutingModule,
    ShareModule,
  ],
  entryComponents: [
    NewTaskComponent, // dialog 组件必须预先装载
    CopyTaskComponent,
  ]
})
export class TaskModule { }
