import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from '../shared/share.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { loadSvg } from '../utils/svg.util';
// import 'rxjs/add/operator/take';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    HttpClientModule,
    ShareModule,
    BrowserAnimationsModule,
    RouterModule, // 便签中 routerLink 属性需要
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ShareModule,
  ],
  providers: [
    {
      provide: 'BASE_CONFIG', useValue: {
        uri: 'http://localhost:3000'
      }
    }
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
