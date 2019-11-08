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
  MatSidenavModule,
} from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { DirectiveModule } from '../directive/directive.module';
import {
  FormsModule, // 包涵一些表单指令 比如 [(ngModule)]
  ReactiveFormsModule // 响应式表单，模板中的一些错误处理指令之类的
} from '@angular/forms';

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
  MatSidenavModule,
  DirectiveModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    // 新版本中 share.module 当公共导入导出时候，貌似不用 imports，直接 exporets 即可 😶 [19-10-31]
    // ...modules

    // ShareModule 中没有组件依赖 material，所以不用 inport [19-11-05]
  ],
  exports: [...modules],
  entryComponents: [ConfirmDialogComponent],
})
export class ShareModule { }
