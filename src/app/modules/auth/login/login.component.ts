import { Component } from '@angular/core';
import { CONST_LOGIN_PAGE } from '../../../data/constants/pages/login/login.const';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public data = CONST_LOGIN_PAGE
}
