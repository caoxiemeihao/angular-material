import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

// 自定义 svg icon
// usage <mat-icon svgIcon="test-svg-icon"></mat-icon>
export const loadSvg = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('test-svg-icon', ds.bypassSecurityTrustResourceUrl('assets/svg/test-svg-icon.svg'));
};
