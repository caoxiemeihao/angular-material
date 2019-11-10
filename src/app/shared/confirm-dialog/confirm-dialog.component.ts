import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

const template = (
`<div style="width:290px;">
  <h3 class="mat-dialog-title">{{title}}</h3>
  <div class="mat-dialog-content">{{content}}</div>
  <div class="text-center">
    <br>
    <button type="button" class="primary mat-raised-button" (click)="onClick(true)">确定</button>
    <button type="button" class="mat-button mat-dialog-close" (click)="onClick(false)">取消</button>
  </div>
</div>
`);

@Component({
  selector: 'app-confirm-dialog',
  template,
  styles: []
})
export class ConfirmDialogComponent implements OnInit {

  title = '';
  content = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) { }

  ngOnInit() {
    this.title = this.data.title;
    this.content = this.data.content;
  }

  onClick(bool: boolean) {
    this.dialogRef.close(bool);
  }

}
