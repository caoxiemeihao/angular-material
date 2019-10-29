import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [ 
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
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
