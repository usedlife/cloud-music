import * as constants from './constants';
import { fromJS } from 'immutable';

import { getBannerRequest, getRecommendListRequest } from '../../../api/request';

export const changeBannerList = (data) => ({
  type: constants.CHANGE_BANNER,
  data: fromJS(data),
})

export const changeRecommendList = (data) => ({
  type: constants.CHANGE_RECOMMEND_LIST,
  data: fromJS(data),
})


export const changeLoading = (data) => ({
  type: constants.CHANGE_LOADING,
  data,
})

export const fetchBannerList = () => {
  return (dispatch) => {
    getBannerRequest().then(data => {
      dispatch(changeBannerList(data.banners));
    }).catch(() => {
      console.error('轮播图数据错误');
    })
  }
}

export const fetchRecommendList = () => {
  return (dispatch) => {
    getRecommendListRequest().then(data => {
      dispatch(changeRecommendList(data.result));
      dispatch(changeLoading(false));
    }).catch(() => {
      console.error('推荐歌单数据传输错误');
    })
  }
}