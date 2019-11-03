import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

// 自定义 svg icon
// usage <mat-icon svgIcon="test-svg-icon"></mat-icon>
export const loadSvg = (ir: MatIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('test-svg-icon', ds.bypassSecurityTrustResourceUrl('assets/svg/test-svg-icon.svg'));

  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl('assets/svg/sidebar/day.svg'));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl('assets/svg/sidebar/month.svg'));
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl('assets/svg/sidebar/project.svg'));
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl('assets/svg/sidebar/projects.svg'));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl('assets/svg/sidebar/week.svg'));

  ir.addSvgIcon('add', ds.bypassSecurityTrustResourceUrl('assets/svg/icons/add.svg'));
  ir.addSvgIcon('delete', ds.bypassSecurityTrustResourceUrl('assets/svg/icons/delete.svg'));
  ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl('assets/svg/icons/move.svg'));

  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].forEach(n => {
    ir.addSvgIcon(`day${n}`, ds.bypassSecurityTrustResourceUrl(`assets/svg/days/day${n}.svg`));
  });

  ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl('assets/svg/avatar/avatars.svg'));
};
