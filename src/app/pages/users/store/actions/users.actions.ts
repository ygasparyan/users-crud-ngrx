import { createAction, props } from '@ngrx/store';
import { User } from '@models';

// Get users list
export const getUsersList = createAction('[Users] Get users list');
export const getUsersListSuccess = createAction('[Users] Get users list success', props<{ users: User[] }>());
export const getUsersListFailed = createAction('[Users] Get users list failed', (error: Error) => ({ error }));

// Get user
export const getUser = createAction('[Users] Get user', props<{ userId: string }>());
export const getUserSuccess = createAction('[Users] Get user success', props<{ users: User[] }>());
export const getUserFailed = createAction('[Users] Get user failed', (error: Error) => ({ error }));

// Add user
export const addUser = createAction('[Users] Add user', props<{ user: User }>());
export const addUserSuccess = createAction('[Users] Add user success', props<{ user: User }>());
export const addUserFailed = createAction('[Users] Add user failed', (error: Error) => ({ error }));

// Edit user
export const editUser = createAction('[Users] Edit user', props<{ user: User }>());
export const editUserSuccess = createAction('[Users] Edit user success', props<{ user: User }>());
export const editUserFailed = createAction('[Users] Edit user failed', (error: Error) => ({ error }));

// Delete user
export const deleteUser = createAction('[Users] Delete user', props<{ userId: string }>());
export const deleteUserSuccess = createAction('[Users] Delete user success', props<{ userId: string }>());
export const deleteUserFailed = createAction('[Users] Delete user failed', (error: Error) => ({ error }));
export const deleteUserConfirm = createAction('[Users] Confirm delete', props<{ userId: string }>());
