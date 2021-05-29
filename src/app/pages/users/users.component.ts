import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@models';
import { UsersFacade } from './store/facades/users.facade';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public usersList$: Observable<User[]> = this.usersFacade.users$;
  public user$: Observable<User> = this.usersFacade.user$;

  constructor(
    private usersFacade: UsersFacade
  ) { }

  ngOnInit(): void {
    this.usersFacade.getList();
  }

  public selectUser(user: User): void {
    this.usersFacade.pickUser(user);
  }

  public removeUser(userId: string): void {
    this.usersFacade.delete(userId);
  }

  public submitUser(user: Partial<User>): void {
    if (user._id) {
      this.usersFacade.updateUser(user);
    } else {
      this.usersFacade.addUser(user);
    }
  }

  public clearUser(): void {
    this.usersFacade.unPickUser();
  }
}
