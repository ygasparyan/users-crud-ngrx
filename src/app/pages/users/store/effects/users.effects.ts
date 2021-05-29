import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap, switchMap, tap } from 'rxjs/operators';
import { AlertService, UsersApiService } from '@services';
import {
  addUser, addUserFailed,
  addUserSuccess,
  deleteUser, deleteUserFailed,
  deleteUserSuccess,
  editUser, editUserFailed, editUserSuccess,
  getUsersList, getUsersListFailed,
  getUsersListSuccess
} from '../actions/users.actions';
import { EMPTY, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersEffects {

  constructor(private actions$: Actions,
              private usersApiService: UsersApiService,
              private alertService: AlertService) {
  }

  loadUsers$ = createEffect(() => this.actions$
    .pipe(
      ofType(getUsersList),
      mergeMap(() => this.usersApiService.usersList()
        .pipe(
          map(users => getUsersListSuccess({users})),
          catchError(error => of(getUsersListFailed(error)))
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      switchMap(({user}) =>
        this.usersApiService.addUser(user).pipe(
          map(user => addUserSuccess({user})),
          catchError(error => of(addUserFailed(error)))
        )
      )
    )
  );

  editUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editUser),
      switchMap(({user}) =>
        this.usersApiService.updateUser(user).pipe(
          map(user => editUserSuccess({user})),
          catchError(error => of(editUserFailed))
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteUser),
      switchMap(({userId}) =>
        this.usersApiService.removeUser(userId).pipe(
          map(() => deleteUserSuccess({userId})),
          catchError(error => of(deleteUserFailed))
        )
      )
    )
  );

  successNotification$ = createEffect(() =>
      this.actions$.pipe(
        ofType(editUserSuccess, addUserSuccess, deleteUserSuccess),
        tap(() => this.alertService.openSnackBar('Success'))
      ),
    { dispatch: false }
  );

  errorNotification$ = createEffect(() =>
      this.actions$.pipe(
        ofType(editUserFailed, addUserFailed, deleteUserFailed),
        tap(() => this.alertService.openSnackBar('Error'))
      ),
    { dispatch: false }
  );

}
