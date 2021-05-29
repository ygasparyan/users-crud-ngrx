import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { User } from '@models';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditComponent implements OnChanges {
  @Input() user: User;
  @Output() submitUser: EventEmitter<User> = new EventEmitter();
  @Output() clearUser: EventEmitter<null> = new EventEmitter();

  public userForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl('')
    }),
    phones: new FormArray([new FormControl()])
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes?.user?.currentValue) {
      this.phones.controls.length = 1;
      for (let i = 0; i < this.user.phones.length - 1; i++) {
        this.addPhone();
      }
      this.userForm.setValue(this.user);
    }
  }

  onSubmit(): void {
    if (!this.user) { this.userForm.get('_id').disable(); }
    const user = this.userForm.value as User;
    this.submitUser.emit(user);
  }

  public addPhone(): void {
    this.phones.push(new FormControl());
  }

  public removePhone(i: number): void {
    this.phones.removeAt(i);
  }

  get phones(): FormArray {
    return this.userForm.get('phones') as FormArray;
  }

}
