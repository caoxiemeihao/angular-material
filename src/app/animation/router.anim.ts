import { trigger, state, style, transition, animate, group } from '@angular/animations';

export const slideToRight = trigger('routerAnim', [
  state('void', style({ position: 'fixed', width: '100%', height: '80%' })),
  state('*', style({ position: 'fixed', width: '100%', height: '80%' })),
  // 'void => *' 别名 ':enter'
  transition(':enter', [
    style({ transform: 'translateX(-100%)', opacity: 0 }),
    group([
      animate('500ms ease-in-out', style({ transform: 'translateX(0)' })),
      animate('.3s ease-in', style({ opacity: 1 })),
    ]),
  ]),
  // '* => void' 别名 ':leave'
  transition(':leave', [
    style({ transform: 'translateX(0)', opacity: 1 }),
    group([
      animate('500ms ease-in-out', style({ transform: 'translateX(100%)' })),
      animate('.3s ease-in', style({ opacity: 0 })),
    ]),
  ]),
]);
