import { createReducer, on, Action } from '@ngrx/store';

import { getUsersList, getUsersListSuccess } from '../actions/users.actions';
import { User} from '@models';

export interface UsersState {
  usersLoading: boolean;
  users: User[];
}

export const initialState: UsersState = {
  usersLoading: false,
  users: []
};

const reducer = createReducer(
  initialState,
  on(getUsersList, (state) => ({...state, usersLoading: true})),
  on(getUsersListSuccess, (state, action) => ({...state, users: action.users, usersLoading: false}))
);

export function usersReducer(state: UsersState | null, action: Action): UsersState {
  return reducer(state, action);
}

export const usersFeatureName = 'users';

