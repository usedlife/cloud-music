import { fromJS } from 'immutable';
import * as constants from './constants';

const initState = fromJS({
  singerList: [],
  isLoading: false,
})

export default (state = initState, action) => {
  const { type, data } = action;

  switch (type) {
    case constants.CHANGE_SINGERLIST:
      return state.set('singerList', data);
    case constants.CHANGE_LOADING:
      return state.set('isLoading', data)
    default:
      return state;
  }
}