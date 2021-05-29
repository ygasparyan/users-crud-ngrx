import { createReducer, on, Action } from '@ngrx/store';

import {
  addUserSuccess,
  deleteUser,
  editUserSuccess,
  getUsersList,
  getUsersListSuccess,
  pickUser,
  unPickUser
} from '../actions/users.actions';
import { User} from '@models';

export interface UsersState {
  usersLoading: boolean;
  selectedUser: User;
  users: User[];
}

export const initialState: UsersState = {
  usersLoading: false,
  selectedUser: null,
  users: []
};

const reducer = createReducer(
  initialState,
  on(getUsersList, (state) => ({...state, usersLoading: true})),
  on(getUsersListSuccess, (state, action) => ({...state, users: action.users, usersLoading: false})),
  on(addUserSuccess, (state, action) => ({...state, users: [...state.users, action.user]})),
  on(editUserSuccess, (state, action) => ({...state, users: state.users.map(u => u._id === action.user._id ? action.user : u)})),
  on(deleteUser, (state, action) => ({...state, users: state.users.filter(u => u._id !== action.userId)})),
  on(pickUser, (state, action) => ({...state, selectedUser: action.user})),
  on(unPickUser, (state) => ({...state, selectedUser: null})),
);

export function usersReducer(state: UsersState | null, action: Action): UsersState {
  return reducer(state, action);
}

export const usersFeatureName = 'users';

