import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './store/effects/users.effects';
import { usersFeatureName, usersReducer } from './store/reducers/users.reducer';


@NgModule({
  declarations: [
    UsersComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature(usersFeatureName, usersReducer),
    EffectsModule.forFeature([UsersEffects])


  ]
})
export class UsersModule { }
