import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '@models';
import { getUsersList } from './store/actions/users.actions';
import { Store } from '@ngrx/store';
import { getUsers } from './store/selectors/users.selector';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public usersList$: Observable<User[]> = this.store.select(getUsers);

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getUsersList());
  }

}
