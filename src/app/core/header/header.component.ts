import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Output() toggle = new EventEmitter<void>();
  @Output() toggleDarkTheme = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  openSidebar() {
    this.toggle.emit();
  }

  onChange(checked: boolean) {
    this.toggleDarkTheme.emit(checked);
  }
}
