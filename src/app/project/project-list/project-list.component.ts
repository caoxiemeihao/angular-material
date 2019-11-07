import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from 'src/app/share/confirm-dialog/confirm-dialog.component';
import { slideToRight } from 'src/app/animation/router.anim';
import { listAnim } from 'src/app/animation/list.anim';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnim],
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routerAnim') state;

  projects = [
    {
      "id": 1,
      "name": "企业协作平台",
      "desc": "商品出入库系统",
      "coverImg": "assets/img/covers/0.jpg"
    },
    {
      "id": 2,
      "name": "企业协作平台",
      "desc": "商品出入库系统",
      "coverImg": "assets/img/covers/1.jpg"
    }
  ];

  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: { title: '新增项目' }
    });
    dialogRef.afterClosed().subscribe(res => {
      this.projects = [...this.projects, {
        id: 3,
        name: '一个新项目',
        desc: '这是一个新的项目',
        coverImg: "assets/img/covers/4.jpg"
      }];
      this.cd.markForCheck();
    });
  }

  launchInviteDialog() {
    this.dialog.open(InviteComponent);
  }

  launchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: { title: '编辑项目' }
    });
  };

  launchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: '删除项目', content: '确认要删除该项目？' }
    });
    dialogRef.afterClosed().subscribe(res => {
      this.projects = this.projects.filter(p => p.id !== project.id);
      this.cd.markForCheck();
    });
  }
}
