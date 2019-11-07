import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

type User = { id: number, name: string };

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.scss']
})
export class InviteComponent implements OnInit {

  items: Array<User> = [
    { id: 1, name: 'zhangsan' },
    { id: 2, name: 'lisi' },
    { id: 3, name: 'wangwu' },
  ];

  constructor() { }

  ngOnInit() {
  }

  displayUser = (user: User) => user.name;

}
