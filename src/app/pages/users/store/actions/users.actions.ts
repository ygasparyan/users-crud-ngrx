import { createAction, props } from '@ngrx/store';
import { User } from '@models';

export const getUsersList = createAction('[Users] Get users list');
export const getUsersListSuccess = createAction('[Users] Get users list success', props<{ users: User[] }>());
export const getUsersListFailed = createAction('[Users] Get users list failed', (error: any) => ({ error }));
