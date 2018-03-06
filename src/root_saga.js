import { takeEvery } from 'redux-saga/effects';
import ACTION from './common/action_constants';
import {home} from './home/home_saga';

export default () => [
  takeEvery(ACTION.HOME.GETHOME, home),
];
