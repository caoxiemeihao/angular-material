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
} from '@angular/material';

const modules = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
];

@NgModule({
  declarations: [],
  imports: [
    // 新版本中 share.module 当公共导入导出时候，貌似不用 imports，直接 exporets 即可 😶
    // ...modules
  ],
  exports: [...modules],
})
export class ShareModule { }
