import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { UsersApiService } from '@services';
import { getUsersList, getUsersListSuccess } from '../actions/users.actions';
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

}
