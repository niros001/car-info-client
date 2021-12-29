import {makeThunkAsyncActionCreator} from 'redux-toolbelt-thunk';
import {makeActionCreator} from 'redux-toolbelt';
import * as Api from '../../services/commonApi';

export const getVehicleInfo = makeThunkAsyncActionCreator('VEHICLE_INFO', Api.getVehicleInfo);
export const getGarageInfo = makeThunkAsyncActionCreator('GARAGE_INFO', Api.getGarageInfo);
export const changeLanguage = makeActionCreator('CHANGE_LANGUAGE');
