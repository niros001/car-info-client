import {makeReducer, makeAsyncReducer} from 'redux-toolbelt';
import {commonActions} from '../actions';

const commonReducer = {
    vehicleInfo: makeAsyncReducer(commonActions.getVehicleInfo),
    garageInfo: makeAsyncReducer(commonActions.getGarageInfo),
    language: makeReducer(commonActions.changeLanguage),
}

export default commonReducer;
