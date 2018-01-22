import ACTION from '../common/action_constants';

function home(state = {user:{}, load: false},action){
  const tempState = Object.assign({}, state);
  if(action.type === ACTION.HOME.LOADHOME) {
    tempState.load = true;
    return tempState;
  } else if(action.type === ACTION.HOME.STOREUSER) {
    tempState.user = action.user;
    return tempState;
  }
  return state;
}
export default home;
