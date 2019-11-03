import { NgModule } from "@angular/core";
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskRoutingModule } from './task-routing.module';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskHeaderComponent,
    TaskListComponent,
    TaskItemComponent,
  ],
  imports: [
    TaskRoutingModule,
    ShareModule,
  ]
})
export class TaskModule { }
