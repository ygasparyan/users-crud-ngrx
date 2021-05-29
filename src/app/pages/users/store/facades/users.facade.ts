import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { User } from '@models';
import { UsersState } from '../reducers/users.reducer';
import { addUser, deleteUserConfirm, editUser, getUsersList, pickUser, unPickUser } from '../actions/users.actions';
import { getUsers, selectedUser } from '../selectors/users.selector';

@Injectable({
  providedIn: 'root'
})
export class UsersFacade {
  public users$: Observable<User[]> = this.store.pipe(select(getUsers));
  public user$: Observable<User> = this.store.pipe(select(selectedUser));

  constructor(private store: Store<UsersState>) { }

  public getList(): void {
    this.store.dispatch(getUsersList());
  }

  public delete(userId: string): void {
    this.store.dispatch(deleteUserConfirm({ userId }));
  }

  public addUser(user: Partial<User>): void {
    this.store.dispatch(addUser({ user }));
  }

  public updateUser(user: Partial<User>): void {
    this.store.dispatch(editUser({ user }));
  }

  public pickUser(user: User): void {
    this.store.dispatch(pickUser({ user }));
  }

  public unPickUser(): void {
    this.store.dispatch(unPickUser());
  }


}
