import * as constants from './constants';
import { fromJS } from 'immutable';
import { getSingerListRequest } from '../../../api/request';

export const changeSingerList = (data) => ({
  type: constants.CHANGE_SINGERLIST,
  data: fromJS(data),
})

export const changeLoading = (isLoading) => ({
  type: constants.CHANGE_LOADING,
  data: isLoading,
})

export const fetchSingerList = data => dispatch => {
  dispatch(changeLoading(true))
  getSingerListRequest(data).then(res => {
    dispatch(changeSingerList(res.artists))
    dispatch(changeLoading(false))
  }).catch(() => {
    console.error('热门歌手获取错误');
  })
}