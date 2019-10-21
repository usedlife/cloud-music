import * as constants from './constants';

import { fromJS } from 'immutable'; 

const defaultState = fromJS({
  bannerList: [],
  recommendList: [],
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_BANNER:
      return state.set('bannerList', action.data);
    case constants.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', action.data);
    default: 
      return state
  }
}