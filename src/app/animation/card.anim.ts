import { trigger, state, transition, style, animate } from '@angular/animations';

export const cardAnim  = trigger('card', [
  state('out', style({ transform: 'scale(1)' })),
  state('hover', style({ transform: 'scale(1.09)' })),
  transition('out => hover', animate('100ms ease-in')),
  transition('hover => out', animate('100ms ease-out')),
]);