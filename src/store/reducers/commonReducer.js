import {makeReducer, makeAsyncReducer} from 'redux-toolbelt';
import {commonActions} from '../actions';

const commonReducer = {
    language: makeReducer(commonActions.changeLanguage),
    report: makeAsyncReducer(commonActions.getReport),
}

export default commonReducer;
