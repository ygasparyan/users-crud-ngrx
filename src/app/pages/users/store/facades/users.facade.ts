import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { User } from '@models';
import { UsersState } from '../reducers/users.reducer';
import { addUser, deleteUser, getUsersList } from '../actions/users.actions';
import { getUsers } from '../selectors/users.selector';

@Injectable({
  providedIn: 'root'
})
export class UsersFacade {
  public users$: Observable<User[]> = this.store.pipe(select(getUsers));
  public user: User;

  constructor(private store: Store<UsersState>) { }

  public getList(): void {
    this.store.dispatch(getUsersList());
  }

  public delete(userId: string): void {
    this.store.dispatch(deleteUser({ userId }));
  }

  public addUser(user: User): void {
    this.store.dispatch(addUser({ user }));
  }


}
