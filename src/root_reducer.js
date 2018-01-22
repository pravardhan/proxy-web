import { combineReducers } from 'redux';
import home from './home/home_reducer';
import about from './about/about_reducer';

const rootReducers = combineReducers({
  home,
  about
});

export default rootReducers;