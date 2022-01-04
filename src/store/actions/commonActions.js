import {makeThunkAsyncActionCreator} from 'redux-toolbelt-thunk';
import {makeActionCreator} from 'redux-toolbelt';
import * as Api from '../../services/commonApi';
import * as govApi from '../../services/govApi';

export const getVehicleInfo = makeThunkAsyncActionCreator('VEHICLE_INFO', Api.getVehicleInfo);
export const getGarageInfo = makeThunkAsyncActionCreator('GARAGE_INFO', Api.getGarageInfo);
export const changeLanguage = makeActionCreator('CHANGE_LANGUAGE');

////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////

export const getReport = makeThunkAsyncActionCreator('GET_REPORT_DATA', govApi.getReport);
