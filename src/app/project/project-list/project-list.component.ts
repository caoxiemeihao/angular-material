import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects = [
    {
      "name": "企业协作平台",
      "desc": "商品出入库系统",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "name": "企业协作平台",
      "desc": "商品出入库系统",
      "coverImg": "assets/img/covers/1.jpg"
    }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    this.dialog.open(NewProjectComponent);
  }

  launchInviteDialog() {
    this.dialog.open(InviteComponent);
  }
}
