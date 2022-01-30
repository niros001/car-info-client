import {makeActionCreator} from 'redux-toolbelt';
import {makeThunkAsyncActionCreator} from 'redux-toolbelt-thunk';
import * as Api from '../../services/authApi';

export const login = makeThunkAsyncActionCreator('LOGIN', Api.login);
export const signup = makeThunkAsyncActionCreator('SIGNUP', Api.signup);
export const logout = makeActionCreator('LOGOUT');
export const reLogged = makeActionCreator('USER_RE_LOGGED');
