import { Component, OnInit, Input, Output, EventEmitter, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { itemAnim } from 'src/app/animation/item.anim';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [itemAnim],
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();
  widerPriority = 'in';

  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(target) {
    this.widerPriority = 'out';
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(target) {
    this.widerPriority = 'in';
  }


  onItemClick() {
    this.taskClick.emit();
  }

  onCheckBoxClick(ev: Event) {
    ev.stopImmediatePropagation();
  }

}
