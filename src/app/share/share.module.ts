import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    // 新版本中 share.module 当公共导入导出时候，貌似不用 imports，直接 exporets 即可 😶
    // CommonModule,
    // MatToolbarModule,
    // MatIconModule,
    // MatButtonModule,
    // MatCardModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
})
export class ShareModule { }
