import { trigger, style, transition, animate, stagger, query } from '@angular/animations';

export const listAnim = trigger('listAnim', [
  transition('* => *', [
    // query 非常强大，能够查询子节点，在 *ngFor 下使用十分强大
    // stagger 多个子节点，做间隔动画
    query(':enter', style({ opacity: 0 }), { optional: true }),
    query(':enter', stagger(100, [
      animate('1s', style({ opacity: 1 }))
    ]), { optional: true }),
    query(':enter', style({ opacity: 1 }), { optional: true }),
    query(':leave', stagger(100, [
      animate('1s', style({ opacity: 0 }))
    ]), { optional: true }),
  ]),
]);
