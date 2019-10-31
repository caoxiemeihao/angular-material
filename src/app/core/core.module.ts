import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { MatToolbarModule, MatIconModule, MatButtonModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { loadSvg } from '../utils/svg.util';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
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
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer,
  ) {
    if (parent) {
      throw new Error('CoreModule already exists. 不能再次加载');
    }

    loadSvg(ir, ds);
  }
}
