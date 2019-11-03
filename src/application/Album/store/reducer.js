import { fromJS } from 'immutable';

import * as constants from './constants';

const initState = fromJS({
  currentAlbum: {},
  isLoading: false,
  isPullDownLoading: false,
})

export default (state = initState, action) => {
  const { type, data } = action;
  switch(type) {
    case constants.CHANGE_CURRENT_ALBUM:
      return state.set('currentAlbum', data);
    case constants.CHANGE_IS_LOADING:
      return state.set('isLoading', data);
    case constants.CHANGE_IS_PULLDOWN_LOADING:
      return state.set('isPullDownLoading', data);
    default:
      return state;
  }
}