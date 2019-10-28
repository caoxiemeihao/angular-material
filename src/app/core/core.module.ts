import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
  constructor(
    // 跳过死循环
    @Optional() @SkipSelf() parent: CoreModule
  ) {
    if (parent) {
      throw new Error('CoreModule already exists. 不能再次加载');
    }
  }
}
