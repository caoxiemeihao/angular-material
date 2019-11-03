import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatDatepickerModule,
  MatRadioModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatSelectModule,
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

const modules = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatDatepickerModule,
  MatRadioModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatSelectModule,
];

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    // 新版本中 share.module 当公共导入导出时候，貌似不用 imports，直接 exporets 即可 😶
    // ...modules
  ],
  exports: [...modules],
  entryComponents: [ConfirmDialogComponent],
})
export class ShareModule { }
