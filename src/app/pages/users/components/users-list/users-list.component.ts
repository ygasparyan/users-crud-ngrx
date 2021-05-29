import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@models';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent {
  @Input() users: User[];
  @Output() selectUser: EventEmitter<User> = new EventEmitter();
  @Output() clearUser: EventEmitter<null> = new EventEmitter();

  public clickUser(user: User): void {
    this.selectUser.emit(user);
  }

  public createUser(): void {
    this.clearUser.emit();
  }

}
