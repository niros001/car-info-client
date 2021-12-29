import {composeReducers} from 'redux-toolbelt';
import authReducer from './authReducer';
import commonReducer from './commonReducer';

export default composeReducers({
    auth: authReducer,
    common: commonReducer,
});
