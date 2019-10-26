import { fromJS } from 'immutable';
import * as constants from './constants';

const initState = fromJS({
  singerList: [],
})

export default (state = initState, action) => {
  const { type, data } = action;

  switch (type) {
    case constants.CHANGE_SINGERLIST:
      return state.set('singerList', data);
    default:
      return state;
  }
}