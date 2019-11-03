import { combineReducers } from 'redux-immutable';

import recommend from '../application/Recommend/store/reducer';
import singers from '../application/Singers/store/reducer';
import album from '../application/Album/store/reducer';

export default combineReducers({
  recommend,
  singers,
  album,
})