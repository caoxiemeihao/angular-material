import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from 'src/app/share/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from 'src/app/animation/router.anim';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [slideToRight],
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routerAnim') state;

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一：学习Anuglar',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务一：学习Material UI',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-14',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
      ]
    },
    // ---------------------------------------------------
    {
      id: 2,
      name: '进行中',
      tasks: [
        {
          id: 1,
          desc: '任务一：学习Anuglar',
          completed: false,
          priority: 1,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务一：学习Material UI',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-14',
          },
          dueDate: new Date(),
        },
      ]
    },
    // ---------------------------------------------------
    {
      id: 2,
      name: '已完成',
      tasks: [
        {
          id: 1,
          desc: '任务一：学习Anuglar',
          completed: false,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11',
          },
          dueDate: new Date(),
        },
        {
          id: 2,
          desc: '任务一：学习Material UI',
          completed: false,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-14',
          },
          dueDate: new Date(),
        },
      ]
    },
    // ---------------------------------------------------
  ];

  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {
      data: { title: '新建任务' }
    });
  }

  launchCopyTaskDialog() {
    const dialogRef = this.dialog.open(CopyTaskComponent, {
      data: { lists: this.lists }
    });
  }
  
  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      data: { title: '修改任务', task }
    });
  }

  launchConfirmDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: '删除任务列表', content: '确定删除任务列表？' }
    });
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: { title: '更改列表名称' }
    });
  }
  
  launchNewListDialog() {    
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: { title: '新建列表' }
    });
  }

}
