import { Component, OnInit, Inject, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {

  title = '';
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    private dialogRef: MatDialogRef<NewProjectComponent>,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.title = this.data.title;
  }

  onClick() {
    this.dialogRef.close();
  }

}
