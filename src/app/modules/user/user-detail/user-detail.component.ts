import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS_DATA } from '@data/constants/users.const';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
import { UserService } from '../../../data/services/api/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public id: number;
  public currentUser: ICardUser;


  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {
    this.id = this.route.snapshot.params.id;
    // this.currentUser = this.users.find(user => user.id === this.id)
  }

  ngOnInit() {
    /*     this.users.find(user => user.id === +this.id) */

    this.userService.getUserById(this.id).subscribe(r => {

      if (!r.error) {
        console.log(r.data)
        this.currentUser = r.data
        console.log('gdfgdf' + this.currentUser)

      }
    });
  }
}


