import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiClass } from '../../schema/ApiClass.class';
import { Observable, of } from 'rxjs';
import { ICardUser } from '../../../shared/components/cards/card-user/icard-user.metadata';
import { catchError, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiClass {


  constructor(
    protected override http: HttpClient
  ) {
    super(http)
  }

  getAllUsers(): Observable<{

    error: boolean;
    msg: string;
    data: ICardUser[]

  }> {
    const response = { error: false, msg: '', data: null }
    return this.http.get<ICardUser[]>(this.url + 'users')
      .pipe(
        map(
          r => {
            response.data = r;
            return response
          }),
        catchError(this.error)
      );
  }
  getUserById(id: number): Observable<{
    error: boolean,
    msg: string,
    data: ICardUser
  }> {
    const response = { error: false, msg: '', data: null }
    return this.http.get<ICardUser[]>(this.url + 'users/' + id)
      .pipe(
        map(r => {
          response.data = r;
          return response;

        }
        ),
        catchError(this.error)
      );
  }
}
