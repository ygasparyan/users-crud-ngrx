import { usersFeatureName, UsersState } from '../reducers/users.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const getUsersFeature = createFeatureSelector<UsersState>(usersFeatureName);

export const getUsers = createSelector(
  getUsersFeature,
  (state: UsersState) => state.users
);
