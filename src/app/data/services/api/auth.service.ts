import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IApiUserAuthenticated } from '../../interfaces/api/iapi-auth-user.metadata';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ERORRS_CONST } from '../../constants/errors/errors-const';
import { API_ROUTES } from '../../constants/routes/api.routes';
import { catchError, map } from 'rxjs/operators';
import { INTERNAL_ROUTES } from '../../constants/routes/internal.routes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: BehaviorSubject<IApiUserAuthenticated>
  public nameUserLS = 'currentUserMain'

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.currentUser = new BehaviorSubject(
      JSON.parse(localStorage.getItem(this.nameUserLS) || '{}')
    );
  }

  get getUser(): IApiUserAuthenticated {
    return this.currentUser.value
  }

  login(
    data: {
      email: string;
      password: string;

    }
  ): Observable<{
    error: boolean;
    msg: string;
    data: any;
  }> {
    const response = { error: true, msg: ERORRS_CONST.LOGIN.ERROR, data: null }
    return this.http.post<{ error: boolean, msg: string, data: any }>(API_ROUTES.AUTH.LOGIN, data)
      .pipe(
        map(r => {
          response.msg = r.msg;
          response.error = r.error;
          response.data = r.data;

          this.setUserToLocalStorage(r.data)
          this.currentUser.next(r.data)

          if (!response.error) {
            this.router.navigateByUrl(INTERNAL_ROUTES.PANEL_USER_LIST)
          }

          return response;
        }),
        catchError(e => {
          return of(response)
        })
      )
  }

  logout() {
    localStorage.removeItem(this.nameUserLS);
    this.router.navigateByUrl(INTERNAL_ROUTES.AUTH_LOGIN)
  }
  private setUserToLocalStorage(user: IApiUserAuthenticated) {
    localStorage.setItem(this.nameUserLS, JSON.stringify(user))
  }
}
