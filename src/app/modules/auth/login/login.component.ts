import { Component } from '@angular/core';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public logo = 'assets/images/defaults/logo.png';

  public loginForm: {
    email: {
      val: string;
      error: string;
      isValid: () => boolean
    }
    password: {
      val: string;
      error: string;
      isValid: () => boolean
    }
  }
  constructor() {
    this.loginForm = {
      email: {
        val: '',
        error: '*El email es requerido',
        isValid() {
          const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          const isValidEmail = pattern.test(this.val);
          if (this.val === '') {
            this.error = 'El email es requerido'
          } else {
            this.error = 'El email no es valido'
          }
          return isValidEmail
        }
      },
      password: {
        val: '',
        error: '*La contraseña es solicitada',
        isValid() {
          return (this.val.length > 0)
        }

      }
    }
  }
  get isValidForm() {
    return (this.loginForm.email.isValid() && this.loginForm.password.isValid());
  }
}
