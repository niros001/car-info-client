import {composeReducers} from 'redux-toolbelt';
import commonReducer from './commonReducer';

export default composeReducers({
    common: commonReducer,
});
