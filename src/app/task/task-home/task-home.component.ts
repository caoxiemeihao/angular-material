import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

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

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent);
  }

}
