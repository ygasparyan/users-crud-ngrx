import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/effects/users.effects';
import { usersFeatureName, usersReducer } from './store/reducers/users.reducer';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent,
    UserEditComponent
  ],
  imports: [
    UsersRoutingModule,
    StoreModule.forFeature(usersFeatureName, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
    MatListModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ]
})
export class UsersModule {
}
