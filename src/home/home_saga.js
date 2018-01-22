import { delay } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import ACTION from '../common/action_constants.js';
import { getDataWithToken } from '../../utils/ajax';
import Api from '../common/api_config';
function* home(action) {
    const data = yield call(getDataWithToken, Api.getUser);
    console.log(data);
    yield put({type:ACTION.HOME.LOADHOME});
    yield put({type: ACTION.HOME.STOREUSER, user: data});
}

export {
    home
};