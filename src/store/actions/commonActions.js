import {makeThunkAsyncActionCreator} from 'redux-toolbelt-thunk';
import {makeActionCreator} from 'redux-toolbelt';
import * as govApi from '../../services/govApi';

export const changeLanguage = makeActionCreator('CHANGE_LANGUAGE');
export const getReport = makeThunkAsyncActionCreator('GET_REPORT_DATA', govApi.getReport);
