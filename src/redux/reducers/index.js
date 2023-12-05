import {combineReducers} from 'redux';
import home from './home';
import pollQuestion from './pollQuestion';
import job from './job';
import classified from './classified'
export default combineReducers({
  home,
  pollQuestion,
  job,
  classified,
});
