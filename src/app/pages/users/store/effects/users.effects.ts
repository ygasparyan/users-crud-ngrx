import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap, switchMap } from 'rxjs/operators';
import { UsersApiService } from '@services';
import {
  addUser,
  addUserSuccess,
  deleteUser,
  deleteUserSuccess,
  editUser, editUserSuccess,
  getUsersList,
  getUsersListSuccess
} from '../actions/users.actions';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersEffects {

  constructor(private actions$: Actions,
              private usersApiService: UsersApiService) {
  }

  loadUsers$ = createEffect(() => this.actions$
    .pipe(
      ofType(getUsersList),
      mergeMap(() => this.usersApiService.usersList()
        .pipe(
          map(users => getUsersListSuccess({users})),
          catchError(error => EMPTY)
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
          catchError(error => EMPTY)
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
          catchError(error => EMPTY)
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
          catchError(error => EMPTY)
        )
      )
    )
  );

}
