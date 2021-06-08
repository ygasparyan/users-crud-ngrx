import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '@models';
import { environment } from '@env';
const { emailRegex, phoneRegex } = environment;

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
  @Output() removeUser: EventEmitter<string> = new EventEmitter();

  public userForm = new FormGroup({
    _id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern(emailRegex)]),
    address: new FormGroup({
      street: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required)
    }),
    phones: new FormArray([new FormControl('', [Validators.required, Validators.pattern(
      phoneRegex
    )])])
  });

  ngOnChanges(changes: SimpleChanges): void {
    this.phones.controls.length = 1;
    if (changes?.user?.currentValue) {
      for (let i = 0; i < this.user.phones.length - 1; i++) {
        this.addPhone();
      }
      this.userForm.setValue(this.user);
    } else {
      this.userForm.reset();
    }
  }

  onSubmit(): void {
    if (!this.user) {
      this.userForm.get('_id').disable();
    } else {
      this.userForm.get('_id').enable();
    }
    const user = this.userForm.value as User;
    this.submitUser.emit(user);
    this.phones.controls.length = 1;
    this.userForm.reset();
  }

  public addPhone(): void {
    this.phones.push(new FormControl('', [Validators.required]));
  }

  public removePhone(i: number): void {
    this.phones.removeAt(i);
  }

  public clickDelete(userId: string): void {
    this.removeUser.emit(userId);
  }

  get phones(): FormArray {
    return this.userForm.get('phones') as FormArray;
  }

}
