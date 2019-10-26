import { fromJS } from 'immutable';
import * as constants from './constants';

const initState = fromJS({
  singerList: [],
  isLoading: false,
  pullUpLoading: false,
  pullDownLoading: false,
  initial: '',
  cat: '',
  offset: 0,
})

export default (state = initState, action) => {
  const { type, data } = action;
  switch (type) {
    case constants.CHANGE_SINGERLIST:
      return state.set('singerList', data);
    case constants.CHANGE_LOADING:
      return state.set('isLoading', data);
    case constants.CHANGE_PULLDOWN_LOADING:
      return state.set('pullDownLoading', data);
    case constants.CHANGE_PULLUP_LOADING:
      return state.set('pullUpLoading', data);
    case constants.CHANGE_CAT:
      return state.set('cat', data)
    case constants.CHANGE_INITIAL:
      return state.set('initial', data);
    case constants.CHANGE_OFFSET:
      return state.set('offset', data);
    default:
      return state;
  }
}