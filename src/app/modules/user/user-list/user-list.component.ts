import { Component, OnInit } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { UserService } from '../../../data/services/api/user.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: ICardUser[]//= USERS_DATA;

  constructor(
    private userService: UserService
  ) {
    this.userService.getAllUsers().subscribe(r => {
      if (!r.error) {
        this.users = r.data
      }
    })
  }

  ngOnInit() {
  }
}
